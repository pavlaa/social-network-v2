import React from 'react';
import {useParams} from "react-router-dom";

type ProfilePageParams = {
  id: string
}

const ProfilePage: React.FC = () => {
  const {id} = useParams<ProfilePageParams>();
  console.log(typeof id, id)
  return (
    <div>
      {id}
    </div>
  );
};

export default ProfilePage;