import React from 'react';
import style from "./ProfilePost.module.scss"


interface ProfilePostProps {
  name: string;
  message: string;
}

const ProfilePost: React.FC<ProfilePostProps> = ({name, message}) => {
  return (
    <div className={style.post}>
      <div className={style.post__user}>
        <div className={style.post__photo}>
          {/*<img src={props.photo ? props.photo : userSmall} alt="photo-user" />*/}
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