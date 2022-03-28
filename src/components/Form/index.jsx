import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input/index.jsx";
import { FormContainer, FormFooter } from "./style";

import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleButton from "../GoogleButton";

const Form = ({
  isLogin,
  isRegister,
  handleSubmitCallBack,
  handleClickButtonLogin,
  handleClickButtonRegister,
}) => {
  const schemaLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const schemaRegister = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /[0-9]{0}[aA-zZ]{1,99}/gm,
        "Nome deve conter pelo menos uma letra"
      ),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitCallBack)}>
      {isLogin && (
        <FormContainer>
          <h1>Login</h1>
          <Input
            error={errors.email?.message}
            register={register}
            name="email"
            icon={AiOutlineMail}
            label="Email"
            placeholder="Email"
          />
          <Input
            error={errors.password?.message}
            register={register}
            name="password"
            icon={FiLock}
            label="Senha"
            placeholder="Senha"
            type={"password"}
          />

          <Button type="submit">Entrar</Button>
          <GoogleButton
            onClick={handleClickButtonLogin}
            text="Entrar com Google"
          />
        </FormContainer>
      )}
      {isRegister && (
        <FormContainer>
          <h1>Cadastro</h1>
          <Input
            error={errors.name?.message}
            register={register}
            name="name"
            icon={BsPerson}
            label="Nome"
            placeholder="Nome"
          />
          <Input
            error={errors.email?.message}
            register={register}
            name="email"
            icon={AiOutlineMail}
            label="Email"
            placeholder="Email"
          />
          <Input
            error={errors.password?.message}
            register={register}
            name="password"
            icon={FiLock}
            label="Senha"
            placeholder="Senha"
            type={"password"}
          />
          <Input
            error={errors.confirm_password?.message}
            register={register}
            name="confirm_password"
            icon={FiLock}
            label="Confirmar Senha"
            placeholder="Confirmar Senha"
            type={"password"}
          />

          <Button type="submit">Cadastrar</Button>

          <GoogleButton
            onClick={handleClickButtonRegister}
            text="Registrar com Google"
          />
        </FormContainer>
      )}
      <FormFooter>
        {isLogin && (
          <span>
            Não possui Cadastro? <Link to={"/register"}>Cadastre-se aqui</Link>{" "}
          </span>
        )}
        {isRegister && (
          <span>
            Já possui Login? <Link to={"/login"}>Clique aqui</Link>{" "}
          </span>
        )}
        <Link to={"/"}>Voltar a página principal</Link>
      </FormFooter>
    </form>
  );
};
export default Form;
