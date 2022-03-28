import { FcGoogle } from "react-icons/fc";
import { Container } from "./styles";

const GoogleButton = ({ text, ...rest }) => {
  return (
    <Container {...rest} type="button">
      <FcGoogle /> {text}
    </Container>
  );
};

export default GoogleButton;
