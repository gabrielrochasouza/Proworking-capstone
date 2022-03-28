import { useEffect, useState } from "react";

import { fetchCitiesForStates } from "../../services/ibge";

const DropDownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForStates(state).then((cities) => {
      setCities(cities);
    });
  }, [state]);

  return (
    <select id={id} name={name} onChange={onChange}>
      <option value="">Selecione uma cidade...</option>
      {cities.map((city) => {
        const { id, nome } = city;
        return (
          <option key={id} value={nome}>
            {nome}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownBrazilianCities;
