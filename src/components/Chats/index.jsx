import ChatCard from "../ChatCard";
import { Container } from "./styles";

import ChatMessages from "../ChatMessages";
import { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";
import {useWorkers} from '../../providers/workers'
import chatImg from "../../assets/svg/chat.svg";

const Chats = ({
  chats,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  messages,
  inputMessage,
  setInputMessage,
  sendMessager,
  refreshChats,
}) => {
  useEffect(() => {
    //refreshMessages()
    refreshChats();
  }, []);

  const [currentChatUser, setCurrentChatUser] = useState("");
  
  const { workers } = useWorkers();

  const idLocalStorage =
    JSON.parse(localStorage.getItem("@ProWorking:user")).user.id || '';
  const workerProfile = workers.find(worker=>Number(worker.user.id)===Number(idLocalStorage) )


  return (
    <Container>
      <div className="col-left">
        <h1>ProWorking Chat</h1>
        <h2 className="usuario">Seja bem vindo {workerProfile.user.name}!!</h2>
        <h2>Chats abertos recentemente:</h2>
        <ul className="recent-open">
          {chats.length !== 0 ? (
            chats.map((chat) => (
              <ChatCard
                setCurrentChatUser={setCurrentChatUser}
                currentChatUser={currentChatUser}
                key={chat.id}
                refreshMessages={refreshMessages}
                chat={chat}
                setCurrentChat={setCurrentChat}
                setMessageIsOpen={setMessageIsOpen}
              />
            ))
          ) : (
            <div className="load">Carregando...</div>
          )}
        </ul>

        <div className="btnVoltar">
          <Link to="/dashboard">
            <AiOutlineClose />
          </Link>
        </div>
      </div>

      <div className="col-right">
        {currentChatUser.length === 0 && (
          <div className="none-selected">
            <img src={chatImg} alt="chat" />
            <h2>Selecione um chat aberto...</h2>
          </div>
        )}
        {window.innerWidth > 1000 && (
          <ChatMessages
            messages={messages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            sendMessager={sendMessager}
            setMessageIsOpen={setMessageIsOpen}
            currentChatUser={currentChatUser}
          />
        )}
      </div>
    </Container>
  );
};

export default Chats;
