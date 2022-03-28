import { ServicePageContainer, NotFound, TopBar } from "./styles";
import CardBox from "../../components/CardBox";
import { useWorkers } from "../../providers/workers";
import { useEffect } from "react";

import NotFoundImg from "../../assets/svg/not_found.svg";

import SearchBar from "../../components/SearchBar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});


const ServicesPage = () => {
  const { workers, refreshWorkers } = useWorkers();

  useEffect(() => {
    refreshWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopBar>
        <div className="search-container">
        <SearchBar />

        </div>
      </TopBar>

      <ServicePageContainer>
        <h2>Todos os serviços</h2>

        {workers.length !== 0 ? (
          <CardBox data-aos="fade-up" workers={workers.filter(({ is_active }) => is_active)} />
        ) : (
          <NotFound>
            <img src={NotFoundImg} alt="Não encontrado" />
            <h3>Nenhum prestador de serviço registrado ainda</h3>
          </NotFound>
        )}
      </ServicePageContainer>
    </>
  );
};

export default ServicesPage;
