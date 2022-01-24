import React from 'react';
import style from "./MessagesPage.module.scss";
import ChatHeader from "./Chat/ChatHeader";
import ChatBody from "./Chat/ChatBody";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ChatMessageForm from "./Chat/ChatForm";
import {useDispatch} from "react-redux";
import {MessagesActionTypes} from "../../../types/messagesTypes";

export interface MessageData {
  message: string;
}

const MessagesPage = () => {
  const {messages} = useTypedSelector(state => state.messages)
  const dispatch = useDispatch()

  function sendMessage(message: MessageData) {
    dispatch({type:MessagesActionTypes.SEND_MESSAGE ,payload: message.message})
  }

  return (
    <div className={style.messages}>
      <div className={style.messages__container}>
        <div className={style.chat}>
          <ChatHeader/>
          <ChatBody messages={messages}/>
          <ChatMessageForm onSubmit={sendMessage}/>
        </div>
        {/*<FriendsList friendsData={ props.friendsData }/>*/}
      </div>
    </div>
  );
};

export default MessagesPage;