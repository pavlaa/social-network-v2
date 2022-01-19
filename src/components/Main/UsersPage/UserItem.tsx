import React from 'react';
import {UserTypes} from "../../../types/types";
import {Link} from "react-router-dom";

interface UserItemProps {
  user: UserTypes
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
    <Link to={`/profile/${user.id}`}>
      <div>{user.name}</div>
    </Link>
  );
};

export default UserItem;