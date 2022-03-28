
import CardMessage from "../CardMessage";
import { BoxChat } from "./styles";

import {IoSendSharp} from 'react-icons/io5'
import { useHistory } from "react-router-dom";

const ChatMessages = ({
    messages,
    inputMessage,
    setInputMessage,
    sendMessager,
    setMessageIsOpen,
    currentChatUser
}) => {
    const history = useHistory()

    return (
        <BoxChat>
            {/* <div className="current-chat-user">{currentChatUser}</div> */}
            <button className="voltarChat" onClick={() =>{
                setMessageIsOpen(false)
                history.push('/dashboard/all-chats')
            }}>{"Voltar"}</button>

            
            <div className="box-messages">
                { messages.length ? messages.map((message) => (
                    <CardMessage key={message.id} message={message} />
                )) : <p>Nenhuma mensagem ainda...</p> }
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="boxInput">
                <input
                    placeholder='Digite sua mensagem aqui...'
                    value={inputMessage}
                    onChange={(event) => setInputMessage(event.target.value)}
                />
                <button onClick={() => sendMessager()}><IoSendSharp/></button>
            </form>
        </BoxChat>
    );
};

export default ChatMessages;
