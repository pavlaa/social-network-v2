import React from 'react';
import style from "./ChatBody.module.scss";
import {MessageTypes} from "../../../../types/types";
import Message from "./Message";


interface ChatBodyProps {
  messages: MessageTypes[]
}

const ChatBody: React.FC<ChatBodyProps> = ({messages}) => {
  const messagesElements = messages.map(message => <Message key={message.id}
                                                            name={message.name}
                                                            date={message.date}
                                                            message={message.message}/>);

  return (
    <div className={style.chatBody}>
      {messagesElements}
    </div>
  );
};

export default ChatBody;