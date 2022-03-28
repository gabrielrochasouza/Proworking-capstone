import ChatCard from "../ChatCard";
import { Container } from "./styles";

//import { useUser } from "../../providers/user";

import ChatMessages from "../ChatMessages";
import { useEffect, useState } from "react";

import chatImg from '../../assets/svg/chat.svg'

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
  useEffect(() =>{
     //refreshMessages()
     refreshChats()
  }, []);


  //const { user: userInfo } = useUser();

  const [currentChatUser, setCurrentChatUser] = useState("");

  const workerProfile = JSON.parse(localStorage.getItem("@ProWorking:user")) || {};

  return (
    <Container>
      <div className="col-left">
        <h1>ProWorking Chat</h1>
        <h2 className="usuario">Seja bem vindo {workerProfile.user.name}!!</h2>
        <h2>Chats abertos recentemente:</h2>
        <ul className="recent-open">
          {chats.length!==0 ? (
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
           )
          }
        </ul>

        {/* <h2>Todos os trabalhadores</h2>
        <ul className="all-chats">
          {workers
            .filter((worker) => worker.is_active)
            .map((worker, index) => (
              <li
                key={index}
                className="list-of-workers"
                onClick={() => {
                  initChat(worker.user.name,worker.user.email);
                  refreshChats()
                }}
              >
                {worker.user.name}
              </li>
            ))}
        </ul> */}
      </div>

      <div className="col-right">
        {currentChatUser.length === 0 && (
        <div className="none-selected">
          <img src={chatImg} alt='chat'/>
          <h2>Selecione um chat aberto...</h2>
        </div>)}
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
        {/* {currentChatUser && (
          <span className="current-Chat">Chat com: {currentChatUser}</span>
        )} */}
      </div>
    </Container>
  );
};

export default Chats;
