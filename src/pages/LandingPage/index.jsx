import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  HowItWorks,
  LandPageContainer,
  VideoSection,
  CategorySection,
} from "./styles";

import ConstructionService from "../../assets/svg/Service_icons/servico_construcao.svg";
import HomeService from "../../assets/svg/Service_icons/servico_domestico.svg";
import TeachingService from "../../assets/svg/Service_icons/servicos_de_ensino.svg";
import MecanicService from "../../assets/svg/Service_icons/servicos_de_mecanico.svg";
import FashionService from "../../assets/svg/Service_icons/servicos_moda_beleza.svg";
import TechnologyService from "../../assets/svg/Service_icons/servicos_tecnologia.svg";

import PeopleImg from "../../assets/svg/people_SVG.svg";
import { AiOutlineSearch } from "react-icons/ai";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const LandingPage = () => {
  const history = useHistory();
  const [inputText, setInputText] = useState("");
  const handleTyping = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    history.push(`/services/${inputText}`);
  };

  return (
    <LandPageContainer>
      <Container>
        <div className="col-left">
          <h1>
            Bem vindo ao <span>PROWORKING</span>
          </h1>
          <p>Encontre o serviço que você precisa aqui!</p>

          <div className="item3">
            <Input
              isSearch
              icon={AiOutlineSearch}
              onKeyDown={handleTyping}
              onChange={(e) => setInputText(e.target.value)}
              className="input"
            />
            <Button onClick={handleSearch} heigth="43px">
              <span>BUSCAR</span>
            </Button>
          </div>
        </div>

        <div className="col-right"></div>
      </Container>

      <HowItWorks>
        <div className="container">
          <div data-aos="fade-left" className="col-left">
            <img src={PeopleImg} alt="Imagem ilustrativa de pessoas" />
          </div>

          <div data-aos="fade-right" className="col-right">
            <h3>Como o site funciona</h3>
            <h4>É novo por aqui?</h4>
            <p>
              Sem problema, tentaremos explicar brevemente como você pode tirar
              o maior proveito de nosso sistema. A primeira facilidade é que
              <strong> você não precisa se cadastrar</strong> para utilizar
              nossa plataforma, você pode simplesmente pesquisar por um serviço
              que estiver precisando e contratar algum profissional bem
              qualificado. Assim que visualizar o prestador de seu interesse
              basta clicar no card apresentado e estarão disponíveis alguns
              botões que facilitarão o seu contato direto com essa pessoa. A
              outra facilidade é que você pode se cadastrar para poder
              <strong> anunciar seu trabalho no site</strong>, tudo isso de
              forma rápida, fácil e <strong>gratuita</strong>! Você só precisa
              de um email, uma senha que você se lembre e um telefone de
              preferência que tenha <em>whatsapp</em> para facilitar o contato
              das pessoas com você. Simples, não é? Fique a vontade para usar
              nosso site, qualquer dúvida clique no botão "SOBRE NÓS" que
              estaremos à disposição para ajudar.
            </p>
          </div>
        </div>
      </HowItWorks>

      <VideoSection>

          

          <iframe
            src={"https://www.youtube.com/embed/WnzDrW6kti8?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{cursor:'pointer'}}
            data-aos="fade-up"
            frameborder="0"
            >
            
          </iframe>
          

      </VideoSection>

      <CategorySection>
        <h3 data-aos="fade-in"> Alguns dos principais serviços </h3>
        <div className="linha"></div>
        <ul>
          <li data-aos-delay="50" data-aos="fade-up">
            <img src={ConstructionService} alt="Construção" />
            <p>Construção</p>
          </li>

          <li data-aos-delay="250" data-aos="fade-up">
            <img src={HomeService} alt="Serviços Domésticos" />
            <p>Serviços Domésticos</p>
          </li>

          <li data-aos-delay="450" data-aos="fade-up">
            <img src={TeachingService} alt="Serviços de ensino" />
            <p>Serviços de ensino</p>
          </li>

          <li data-aos-delay="650" data-aos="fade-up">
            <img src={MecanicService} alt="Serviços mecânicos" />
            <p>Serviços mecânicos</p>
          </li>

          <li data-aos-delay="850" data-aos="fade-up">
            <img src={FashionService} alt="Serviços de moda e beleza" />
            <p>Serviços de moda e beleza</p>
          </li>

          <li data-aos-delay="1050" data-aos="fade-up">
            <img
              src={TechnologyService}
              alt="Serviços relacionados a tecnologia"
            />
            <p>Serviços relacionados a tecnologia</p>
          </li>
        </ul>
      </CategorySection>
    </LandPageContainer>
  );
};

export default LandingPage;
