import React from 'react';
import style from "./ProfilePost.module.scss"
import userSmall from "../../../img/user.svg";
import {Profile} from "../../../types/types";


interface ProfilePostProps {
  name: string;
  message: string;
  profile: Profile;
}

const ProfilePost: React.FC<ProfilePostProps> = ({name, message, profile}) => {
  return (
    <div className={style.post}>
      <div className={style.post__user}>
        <div className={style.post__photo}>
          <img src={profile.photos.small ? profile.photos.small : userSmall} alt="photo-user" />
        </div>
        <div className={style.post__info}>
          <div className={style.post__name}>{name}</div>
          <div className={style.post__date}>17 Nov 16:13 </div>
        </div>
      </div>
      <div className={style.post__text}>{message}</div>
    </div>
  );
};

export default ProfilePost;