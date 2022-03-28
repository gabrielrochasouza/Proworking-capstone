import { ServicePageContainer, NotFound, TopBar } from "./style";

import CardBox from "../../components/CardBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useWorkers } from "../../providers/workers";
import { useEffect, useState } from "react";
import NotFoundImg from "../../assets/svg/not_found.svg";
import SearchBar from "../../components/SearchBar";

const SearchResults = () => {
  const { workers, refreshWorkers } = useWorkers();
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    refreshWorkers();

    const userInput = search
      .toLowerCase()
      .split(" ")
      .filter((elem) => elem !== " " || elem !== "")
      .join(" ")
      .trim();

    const filteredWorkers = workers
      .filter((worker) => worker.is_active)
      .filter(
        (worker) =>
          worker.user.name.toLowerCase().includes(userInput) ||
          worker.summary.toLowerCase().includes(userInput) ||
          worker.cities.filter(
            ({ state, city }) =>
              city.toLowerCase().includes(userInput) ||
              state.toLowerCase().includes(userInput)
          ).length ||
          worker.occupation_areas.filter((occupation) =>
            occupation.toLowerCase().includes(userInput)
          ).length
      );

    setSearchResults(filteredWorkers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <TopBar>
        <div>
          <SearchBar />
        </div>
      </TopBar>
      <ServicePageContainer>
        <h1>Resultados para a pesquisa "{search}" </h1>
        {searchResults.length !== 0 ? (
          <CardBox workers={searchResults} />
        ) : (
          <NotFound>
            <img src={NotFoundImg} alt="Não encontrado" />
            <h2>Nenhum resultado encontrado</h2>
          </NotFound>
        )}
      </ServicePageContainer>
    </>
  );
};

export default SearchResults;
