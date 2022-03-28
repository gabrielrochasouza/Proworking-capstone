import { BotaoFechar, Container, Imagem, ModalContainer } from "./styles";
import React from "react";
import { useState } from "react";

import Modal from "react-modal";
import whatsapp from "../../assets/Whatsapp.png";
import email from "../../assets/Email.png";
import DefaultUserImg from "../../assets/profile 1.png";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
    width: "96%",
    maxWidth: "600px",
    height: "500px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Card = ({ nome, img, especialidades = [], locais = [], id }) => {
  
  const [open, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal(e) {
  //   if (e.target.tagName === "SECTION") {
  //     setIsOpen(true);
  //   } else if (
  //     e.target.tagName === "LI" ||
  //     e.target.tagName === "IMG" ||
  //     e.target.tagName === "H2"
  //   ) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(true);
  //   }
  // }

  return (
    <Container>
      <>
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <ModalContainer id={id} onClick={(e) => openModal(e)}>
            <div className="headerModal">
              <h2>{nome}</h2>
              <Imagem src={DefaultUserImg} alt="Imagem" />
            </div>

            <ul>
              <h3>Especialidades:</h3>

              {especialidades.slice(0, 4).map((especialidade, index) => {
                return <li key={index}>{especialidade}</li>;
              })}
              {especialidades.length > 4 && <li>...</li>}
            </ul>

            <p>Locais de atendimento:</p>
            <ul className="location">
              {locais.slice(0, 2).map((local, index) => (
                <li className="locationDiv" key={`${local}-${index}`}>
                  {local.state}- {local.city}
                </li>
              ))}
            </ul>

            <span>
              <button
                onClick={() => {
                  const subject = "Anúncio do site Proworking";
                  const body = "Gostaria de conversar sobre...";
                  window.open(
                    `mailto:${email}?subject=${subject}&body=${body}`
                  );
                }}
              >
                <Imagem src={email} alt="" />
              </button>
              <button
                onClick={() => {
                  const text =
                    "Vi seu perfil na Proworking, gostaria de conversar sobre o trabalho";
                  const tel = whatsapp
                    .split("")
                    .filter((letter) => !isNaN(letter) && letter !== " ")
                    .join("");

                  window.open(`https://wa.me/${tel}?text=${text}`);
                }}
              >
                <Imagem src={whatsapp} alt="" />
              </button>
            </span>
            <div className="link">
              <Link
                to={`/services/${id}/${nome}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Ver o perfil completo
              </Link>
            </div>
          </ModalContainer>

          <BotaoFechar onClick={closeModal} className="botaoFechar">
            X
          </BotaoFechar>
        </Modal>
        <section data-aos='fade-in' id={id} onClick={(e) => openModal(e)}>
          <div className="titleAndImg">
            <h2 className="title">{nome}</h2>
            <img src={DefaultUserImg} alt="Imagem" />
          </div>

          <ul className="occupation_areas">
            {especialidades.slice(0, 2).map((especialidade, index) => (
              <li key={index}>{especialidade}</li>
            ))}
            {especialidades.length > 2 && <li>...</li>}
          </ul>

          <ul className="location">
            <p>Locais de atendimento:</p>
            {locais.slice(0, 2).map((local, index) => (
              <li className="locationDiv" key={`${local}-${index}`}>
                {local.state}- {local.city}
              </li>
            ))}
          </ul>
          <p className="link">
            <Link
              to={`/services/${id}/${nome}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Ver o perfil Completo
            </Link>
          </p>
        </section>
      </>
    </Container>
  );
};

export default Card;
