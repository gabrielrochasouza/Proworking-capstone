import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ChatMessages from "../../components/ChatMessages";
import Chats from "../../components/Chats";
import { useUser } from "../../providers/user";
import { chatApi } from "../../services/api";
import { useAuthenticated } from "../../providers/authenticated";

import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import { toast } from "react-toastify";

const ChatPage = () => {
  const { user } = useUser();
  const { authenticated } = useAuthenticated();

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);

  const [inputMessage, setInputMessage] = useState("");
  const [messageIsOpen, setMessageIsOpen] = useState(false);

  const history = useHistory();

  const projectId = 'f408c6cc-b6de-420f-904a-623c1b520ae0'
  //const { email, name } = user.user;

  const refreshChats = () => {

    const header = {
      "Project-ID": projectId,
      "User-Name": `${user.user.email}`,
      "User-Secret": "proworking2022",
      "Content-Type": "application/json",
    };
    chatApi
      .get("/chats", { headers: header })
      .then(({ data }) => {

        setChats([...data]);
      })
      .catch((err) => {
        toast("Você precisa terminar seu cadastro");
        history.push("/");
      });
  };

  const refreshMessages = (chatId) => {
    const header = {
      "Project-ID": projectId,
      "User-Name": `${user.user.email}`,
      "User-Secret": "proworking2022",
      "Content-Type": "application/json",
    };
    chatApi
      .get(`/chats/${chatId}/messages`, { headers: header })
      .then(({ data }) => setMessages([...data]))
  };

  useEffect(() => {
    const refresh = setInterval(() => {
      refreshChats();
      refreshMessages(currentChat.id)
    }, 3500);
    return ()=>{clearInterval(refresh) }
  }, [currentChat]);

  const sendMessager = () => {
    const header = {
      "Project-ID": projectId,
      "User-Name": `${user.user.email}`,
      "User-Secret": "proworking2022",
      "Content-Type": "application/json",
    };
    const dataMessage = { text: `${inputMessage}` };
    chatApi
      .post(`/chats/${currentChat.id}/messages/`, dataMessage, {
        headers: header,
      })
      .then(() => refreshMessages(currentChat.id))
      .then(() => setInputMessage(""))
      refreshChats();
  };

  if (authenticated === false) {
    return <Redirect to={"/"} />;
  }


  return (
    <Container>
      {window.innerWidth < 1000 ? (
        messageIsOpen ? (
          <ChatMessages
            messages={messages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            sendMessager={sendMessager}
            setMessageIsOpen={setMessageIsOpen}
          />
        ) : (
          <Chats
            chats={chats}
            refreshChats={refreshChats}
            refreshMessages={refreshMessages}
            setCurrentChat={setCurrentChat}
            setMessageIsOpen={setMessageIsOpen}
          />
        )
      ) : (
        <Chats
          chats={chats}
          refreshMessages={refreshMessages}
          setCurrentChat={setCurrentChat}
          setMessageIsOpen={setMessageIsOpen}
          
          refreshChats={refreshChats}
          messages={messages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessager={sendMessager}
         
        />
      )}
    </Container>
  );
};

export default ChatPage;
