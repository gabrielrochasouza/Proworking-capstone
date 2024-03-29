import { Link } from "react-router-dom";
import { DashboardContainer } from "./style";

import Cadastro from "../../../assets/svg/cadastrar-ou-atualizar.svg";
import VerAnúncios from "../../../assets/svg/see-all-jobs.svg";
import CriarAnuncios from "../../../assets/svg/create.svg";
import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../../../providers/authenticated";
import { useWorkers } from "../../../providers/workers";

const DashboardHomePage = () => {
  const profileId =
    JSON.parse(localStorage.getItem("@ProWorking:user")).user.id || "";
  const { workers } = useWorkers();

  const profile =
    workers.find((worker) => Number(worker.user.id) === Number(profileId)) ||
    JSON.parse(localStorage.getItem("@ProWorking:user"));

  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <DashboardContainer>
      <h1>Seja bem vindo {profile.user?.name}!! 😊 </h1>
      <h2>O que você deseja?</h2>
      <ul>
        <Link
          to={"/dashboard/service-register"}
          onClick={() => window.scrollTo(0, 0)}
        >
          <li>
            <img src={Cadastro} alt="Cadastrar" />
            <div>
              <h3>Cadastrar serviço ou Atualizar perfil</h3>
            </div>
          </li>
        </Link>

        <Link to={"/dashboard/edit-profile"}>
          <li>
            <img src={CriarAnuncios} alt="Editar Perfil" />
            <div>
              <h3>Editar perfil</h3>
            </div>
          </li>
        </Link>

        <Link to={"/dashboard/all-chats"} onClick={() => window.scrollTo(0, 0)}>
          <li>
            <img src={VerAnúncios} alt="Enviar mensagem" />
            <div>
              <h3>Enviar mensagem direta para algum worker</h3>
            </div>
          </li>
        </Link>
      </ul>
    </DashboardContainer>
  );
};
export default DashboardHomePage;
