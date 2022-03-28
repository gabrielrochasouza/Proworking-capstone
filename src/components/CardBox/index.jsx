import Card from "../Card";
import { Container } from "./styles";

const CardBox = ({ workers }) => {
  return (
    <Container   >
      {workers.map((worker) => (
        <Card
          data-aos="fade-up"
          id={worker.id}
          key={worker.id}
          img={""}
          nome={worker.user.name}
          especialidades={worker.occupation_areas}
          locais={worker.cities}
          
        />
      ))}
    </Container>
  );
};

export default CardBox;
