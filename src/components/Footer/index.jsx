import { FooterContainer } from "./styles";
import logo from "../../assets/svg/logoProWorking 2.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { useAuthenticated } from "../../providers/authenticated";

const Footer = () => {
  const location = useLocation();
  const { authenticated } = useAuthenticated();

  return (
    <FooterContainer currentPage={location.pathname}>
      <div data-aos="fade-up" className="bolaMenor"></div>
      <div data-aos="fade-up" className="bolaMaior"></div>

      <div data-aos="fade-up" className="footer__box">
        <figure className="footer-logo">
          <img src={logo} alt="logo" />
          <div className="footer-logo-socialicon">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillFacebook />
          </div>
        </figure>

        <div data-aos="fade-up" data-aos-delay="150" className="footer-pages">
          <ul>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
            </li>

            {authenticated === false && (
              <>
                <li>
                  <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => window.scrollTo(0, 0)}>
                    Cadastro
                  </Link>
                </li>
              </>
            )}
            {authenticated && (
              <li>
                <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="250" className="footer-contato">
          <ul>
            <li>
              <AiFillPhone /> (99)99999-9999
            </li>
            <li>
              <AiFillMail /> cavalo@mail.com.com.com
            </li>
            <li>
              <GoLocation /> Curitiba, Paraná
            </li>
            <li> Kenzie Academy Brasil </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="350" className="footer-button">
          <Button
            onClick={() =>
              window.open(
                "https://chatting.page/pfld2gf05vk4z3599sognbmfltyplgom"
              )
            }
          >
            Entre em contato
          </Button>
        </div>
      </div>
      <p>
        Desenvolvido por ProWorking 💜 | &copy; 2022 Todos os direitos
        Reservados
      </p>
    </FooterContainer>
  );
};

export default Footer;
