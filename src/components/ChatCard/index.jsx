import { ContainerChat } from "./styles";
import DefaultUserImg from "../../assets/profile 1.png";

const ChatCard = ({
  chat,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  setCurrentChatUser,
  currentChatUser,
}) => {
  const workerProfile =
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  const newDate = new Date(chat.last_message.created);
  const fortedDate = newDate.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  return (
    <ContainerChat
      onClick={() => {
        setCurrentChat(chat);
        refreshMessages(chat.id);
        setMessageIsOpen(true);
        setCurrentChatUser(chat.title);
      }}
      className={currentChatUser === chat.title ? "selected" : ""}
    >
      <figure>
        <img src={DefaultUserImg} alt="profile" />
      </figure>
      <div>
        <h3>
          {chat.title.includes("/")
            ?( chat.title.split("/")[0] === workerProfile.user.name
              ? chat.title.split("/")[1]
              : chat.title.split("/")[0])
            : chat.title}
        </h3>
        <p>{chat.last_message.text}</p>
      </div>
      <span>{fortedDate}</span>
    </ContainerChat>
  );
};

export default ChatCard;
