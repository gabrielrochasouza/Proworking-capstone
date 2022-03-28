import { Container, Content, ContainerInputSearch } from "./styles";

import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const Input = ({
  label,
  type = "text",
  error,
  name,
  register,
  isSearch = false,
  isNormalInput = false,
  icon: Icon,
  ...rest
}) => {
  const [typePassword, setTypePassword] = useState("password");

  const handleTypePassword = () => {
    if (typePassword === "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  return (
    <>
      {isSearch ? (
        <ContainerInputSearch {...rest} placeholder="PESQUISE AQUI" />
      ) : isNormalInput ? (
        <Container>
          <p>{label}</p>
          <Content>
            {!!Icon && <Icon />}
            <input type={type === "password" ? typePassword : type} {...rest} />
          </Content>
        </Container>
      ) : (
        <Container>
          <p>
            {label} {!!error && <span> - {error}</span>}
          </p>
          <Content>
            {!!Icon && <Icon />}
            <input
              type={type === "password" ? typePassword : type}
              {...register(name)}
              {...rest}
            />
            {type === "password" && (
              <span onClick={() => handleTypePassword()}>
                {typePassword === "password" ? <HiEye /> : <HiEyeOff />}
              </span>
            )}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Input;
