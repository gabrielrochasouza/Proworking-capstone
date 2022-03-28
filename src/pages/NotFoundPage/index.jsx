import { Container, ImgContainer } from "./styles";
import Img404 from "../../assets/svg/404.svg";

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h2>Oops, houve algum problema</h2>

        <ImgContainer>
          <img src={Img404} alt="404" />
        </ImgContainer>
      </Container>
    </>
  );
};

export default NotFoundPage;
