import { Container } from "./styles";

const Button = ({
  mobile,
  children,
  active = true,
  isprimary = true,
  width = "180px",
  heigth = "50px",
  color = "white",
  ...rest
}) => {
  return (
    <Container
      mobile={mobile}
      isprimary={isprimary}
      width={width}
      heigth={heigth}
      color={color}
      type="button"
      active={active}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
