import React from 'react';
import style from "./Message.module.scss";


interface MessageProps {
  name: string;
  date: string;
  message: string
}

const Message: React.FC<MessageProps> = ({name, date, message}) => {
  return (
    <div className={style.message}>
      <div className={style.message__info}>
        <div className={style.message__photo}>
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="photo-user-message"/>
        </div>
        <div className={style.message__user}>
          <div className={style.message__name}>{name}</div>
          <div className={style.message__date}>{date}</div>
        </div>
      </div>
      <div className={style.message__text}>
        {message}
      </div>
    </div>
  );
};

export default Message;