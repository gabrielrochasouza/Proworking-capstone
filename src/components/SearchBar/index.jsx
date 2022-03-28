import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearch = (text) => {
    history.push(`/services/${text}`);
  };

  return (
    <Container>


      <div className="inputDiv">
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
          onChange={(e) => setSearch(e.target.value.trim())}
          placeholder="Pesquisar"
        />
        <button onClick={() => handleSearch(search)}>
          <AiOutlineSearch />
        </button>
      </div>
    </Container>
  );
};

export default SearchBar;
