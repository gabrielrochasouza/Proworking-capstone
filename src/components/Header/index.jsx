import { Container, ContainerHeader, Nav } from "./styles";

import logo from "../../assets/svg/logoProWorking 2.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import BurgerMenuLink from "../BurgerMenuLink";
import { useAuthenticated } from "../../providers/authenticated";
import { toast } from "react-toastify";

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const { authenticated, setAuthenticated } = useAuthenticated();

    const logOut = () => {
        localStorage.clear();
        toast("Você se deslogou");
        setAuthenticated(false);
        location.pathname === "/dashboard" && history.push("/");
    };

  return (
    <Container currentPage={location.pathname}>
      <ContainerHeader>
        <BurgerMenu>
          <BurgerMenuLink onClick={() => window.scrollTo(0, 0)} to="/services">
            Serviços
          </BurgerMenuLink>
          <BurgerMenuLink onClick={() => window.scrollTo(0, 0)} to="/aboutus">
            Sobre nós
          </BurgerMenuLink>
          {authenticated ? (
            <>
              <BurgerMenuLink
                onClick={() => window.scrollTo(0, 0)}
                to="/dashboard"
              >
                Dashboard
              </BurgerMenuLink>
              <BurgerMenuLink to={"/"} handleCloseMenu={logOut}>
                Sair
              </BurgerMenuLink>
            </>
          ) : (
            <>
              <BurgerMenuLink to="/login">Entrar</BurgerMenuLink>
              <BurgerMenuLink to="/register">Cadastre-se</BurgerMenuLink>
            </>
          )}
        </BurgerMenu>
        <figure>
          <img
            src={logo}
            alt="Logo"
            onClick={() => {
              window.scrollTo(0, 0);
              history.push("/");
            }}
          />
        </figure>
        <Nav>
          <Link
            className={location.pathname === "/services" ? "currentPage" : ""}
            onClick={() => window.scrollTo(0, 0)}
            to={"/services"}
            style={{backgroundColor:"#04164d"}}
          >
            Serviços
          </Link>
          <Link
            className={location.pathname === "/aboutus" ? "currentPage" : ""}
            onClick={() => window.scrollTo(0, 0)}
            to={"/aboutus"}
            style={{backgroundColor:"#04164d"}}
          >
            Sobre Nós
          </Link>
          {authenticated ? (
            <>
              <Link
                className={
                  location.pathname === "/chat" ? "currentPage" : ""
                }
                onClick={() => window.scrollTo(0, 0)}
                to={"/chat"}
                style={{backgroundColor:"#04164d"}}
              >Chat</Link>
              <Link
                className={
                  location.pathname === "/dashboard" ? "currentPage" : ""
                }
                onClick={() => window.scrollTo(0, 0)}
                to={"/dashboard"}
                style={{backgroundColor:"#04164d"}}
              >
                Dashboard
              </Link>
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  logOut();
                }}
              >
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link
                className={location.pathname === "/login" ? "currentPage" : ""}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={"/login"}
              >
                Entrar
              </Link>
              <Link
                className={
                  location.pathname === "/register" ? "currentPage" : ""
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={"/register"}
              >
                Cadastre-se
              </Link>
            </>
          )}
        </Nav>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
