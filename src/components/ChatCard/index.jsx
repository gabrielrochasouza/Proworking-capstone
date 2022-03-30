import { ContainerChat } from "./styles";
import DefaultUserImg from "../../assets/profile 1.png";
import { useWorkers } from "../../providers/workers";

const ChatCard = ({
  chat,
  refreshMessages,
  setCurrentChat,
  setMessageIsOpen,
  setCurrentChatUser,
  currentChatUser,
}) => {
  const { workers } = useWorkers();

  const workerProfile =
    JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  const newDate = new Date(chat.last_message.created);
  const fortedDate = newDate.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const currentWorker =(
    chat.title
      .split("/")
      .slice(2)
      .filter(
        (elem) =>
          Number(elem) !== Number(workerProfile.user.id) && elem !== 'undefined'
      ).map(elem=> workers.find(worker=>Number(worker.userId)===Number(elem) ))
  );
  console.log(currentWorker)

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
        <img src={currentWorker.length!==0 ? (currentWorker[0].user.img ?currentWorker[0].user.img:DefaultUserImg ): DefaultUserImg} alt="profile" />
      </figure>
      <div>
        <h3>
          {chat.title.includes("/")
            ? chat.title.split("/")[0] === workerProfile.user.name
              ? chat.title.split("/")[1]
              : chat.title.split("/")[0]
            : chat.title}
        </h3>
        <p>{chat.last_message.text}</p>
      </div>
      <span>{fortedDate}</span>
    </ContainerChat>
  );
};

export default ChatCard;
