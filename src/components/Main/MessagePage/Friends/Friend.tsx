import React from 'react';
import style from "./Friend.module.scss";
import {NavLink} from "react-router-dom";

interface FriendProps  {
  id: number
  name: string;
  photo: string
}

const Friend: React.FC<FriendProps> = ({id, name, photo}) => {

  return (
    <NavLink to={`/messages/${id}`}>
      <div className={ style.friend }>
        <div className={ style.friend__photo }>
          <img src={photo} alt="photo-friend-message"/>
        </div>
        <div className={ style.friend__name }>{name}</div>
      </div>
    </NavLink>
  );
};

export default Friend;