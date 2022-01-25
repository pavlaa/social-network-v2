import React from 'react';
import style from "./Friends.module.scss";
import {FriendTypes} from "../../../../types/types";
import Friend from "./Friend";

interface FriendsProps  {
  friends: FriendTypes[];
}

const Friends: React.FC<FriendsProps> = ({friends}) => {
  const friendsElements = friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}  photo={friend.photo}/>);

  return (
    <div className={ style.friendsList }>
      <div className={ style.friendsList__search }>
        <input placeholder="Search friend" type="text" />
      </div>
      {friendsElements}
    </div>
  );
};

export default Friends;