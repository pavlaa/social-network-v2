import React from 'react';
import style from "./ChatForm.module.scss";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MessageData} from "../MessagesPage";

const ChatForm: React.FC<InjectedFormProps<MessageData>> = ({handleSubmit}) => {

  return (
    <div className={ style.chatInput }>
      <form onSubmit={handleSubmit} className={ style.chatInput__form }>
        <div className={ style.chatInput__textarea }>
          <Field name="message" component="textarea" placeholder="Write your message" />
        </div>
        <div className={ style.chatInput__button }>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

const ChatMessageForm = reduxForm<MessageData>({form: 'chat'})(ChatForm)

export default ChatMessageForm;