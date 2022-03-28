import { OurTeam } from "./styles";

import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";

const AboutUs = () => {
  const team = [
    {
      name: "Cayo Rodrigues",
      job: "Tech Lead",
      linkedin: "https://www.linkedin.com/in/cayo-rodrigues/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AFBZVCMD-b844c0054447-512",
      github:"https://github.com/cayo-rodrigues"
    },
    {
      name: "Igor Souza",
      job: "Project Owner",
      linkedin: "https://www.linkedin.com/in/sousa-igor/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02ARJSS0FR-a52854ef7ff6-512",
      github:"https://github.com/sousair185"
    },
    {
      name: "Gabriel Rocha",
      job: "Scrum Master",
      linkedin: "https://www.linkedin.com/in/gabriel-da-rocha-de-souza/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02BSSD4M1Q-73b0d8433e45-512",
      github:"https://github.com/gabrielrochasouza"
    },
    {
      name: "Gustavo",
      job: "Quality Assurance",
      linkedin: "https://www.linkedin.com/in/gustavo-mouravs/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02BAE1JRQE-2d85ec48cc78-512",
      github:"https://github.com/gustavomvs"
    },
    {
      name: "Thiago",
      job: "Quality Assurance",
      linkedin:
        "https://www.linkedin.com/in/thiago-henrique-monserrat-rezende-83562b213/",
      img: "https://ca.slack-edge.com/TQZR39SET-U028KLN08DA-296580f3d02b-512",
      github:"https://github.com/ThiagoMonserrat"
    },
    {
      name: "Christian Bezerra",
      job: "Quality Assurance",
      linkedin: "https://www.linkedin.com/in/christian-bezerra-332a36130/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02F16XAA3F-313a0452ff59-512",
      github:"https://github.com/christian-bm"
    },
  ];

  return (
    <>
      <OurTeam>
        <h1 data-aos="fade-in" data-aos-delay="150">
          Sobre nós
        </h1>
        <div data-aos="fade-in" data-aos-delay="1050" className="linha"></div>
        <p data-aos="fade-up">
          O projeto ProWorking foi criado para agilizar e facilitar a
          contratação de pessoas em serviços informais. O projeto foi criado
          pelos os estudantes em desenvolvimento web da Kenzie Academy Brasil, e
          representa o projeto final do módulo M3 do curso fullstack.
        </p>
        <h3 data-aos="fade-up" data-aos-delay="150">
          Nosso Time Dev
        </h3>
        <div data-aos="fade-in" data-aos-delay="1050" className="linha"></div>
        <div>
          <ul>
            {team.map((member, index) => (
              <li data-aos="fade-up" data-aos-delay={index * 30} key={index}>
                <img src={member.img} alt={member.name} />
                <div>
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github account"
                  >
                    <AiFillGithub/> 
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </OurTeam>
    </>
  );
};

export default AboutUs;
