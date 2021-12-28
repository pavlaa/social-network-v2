import React from 'react';
import {UserTypes} from "../types/types";
import {setUsersPage} from "../store/action-creators/userAction";

interface UserItemProps {
  user: UserTypes
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <div>{user.name}</div>
  );
};

export default UserItem;