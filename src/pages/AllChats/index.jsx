import { Container } from "./style.js";
import { useWorkers } from "../../providers/workers/index.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { chatApi } from "../../services/api.js";
import { useAuthenticated } from "../../providers/authenticated/index.js";
import { Redirect } from "react-router-dom";
import DefaultUserImg from "../../assets/profile 1.png";

import {IoIosArrowForward} from 'react-icons/io'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});



const AllChatsPage = () => {
  const { workers } = useWorkers();
  const { authenticated } = useAuthenticated();
  const history = useHistory();

  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {}
  );

  const userName = userInfo.user.name

  const projectId = 'f408c6cc-b6de-420f-904a-623c1b520ae0'

  const initChat = (name, email,chatFriendId) => {
    const header = {
      "Project-ID": projectId,
      "User-Name": `${userInfo.user.email}`,
      "User-Secret": "proworking2022",
      "Content-Type": "application/json",
    };
    const data = {
      usernames: [userInfo.user.email, email],
      title: `${userInfo.user.name}/${name}/${userInfo.user.id}/${chatFriendId}`,
      is_direct_chat: false,
    };
    if (authenticated) {
      chatApi
        .put("/chats/", data, { headers: header })
        .then((res) =>{ 
          history.push("/chat")
        });
    } else {
      toast("Faça login para usar o chat!", {
        toastId: "toastfyInfo",
      });
    }
  };

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <Container>
      <h1 data-aos="fade-right">Escolha quem você deseja enviar mensagem:</h1>
      <ul>
        {workers.filter(worker=>worker.is_active && worker.user.name!==userName ).map((worker, index) => (
          <li data-aos="fade-up" key={index} onClick={()=>{initChat(worker.user.name, worker.user.email,worker.user.id )}}>
              <figure>
                  <img src={worker.user?.img ? worker.user.img : DefaultUserImg} alt="profile pic"/>
              </figure>
              <div className="info">
                  <h2>{worker.user.name}</h2>
                  <p>{worker.occupation_areas.join(', ')}</p>
              </div>
              <div className="arrow">
                  <IoIosArrowForward/>
              </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AllChatsPage;
