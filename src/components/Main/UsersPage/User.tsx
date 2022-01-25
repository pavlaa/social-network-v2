import React from 'react';
import style from  "./User.module.scss"
import {UserTypes} from "../../../types/types";
import {Link} from "react-router-dom";
import userPhoto from '../../../img/user.svg';

interface UserItemProps {
  user: UserTypes
}

const User: React.FC<UserItemProps> = ({user}) => {


  return (
    <div className={ style.user }>
      <Link to={ '/profile/' + user.id}>
        <div className={ style.user__info }>
          <div className={ style.user__photo }>
            <img src={ (user.photos.small !== null) ? user.photos.small : userPhoto } alt="user-photo"/>
          </div>
          <div className={ style.user__descr }>
            <div className={ style.user__fullname }>
              { user.name }
            </div>
            <div className={ style.user__location }>
              Location: { "props.location.country" }, { "props.location.city" }
            </div>
          </div>
        </div>
      </Link>
      {/*{ props.followed ?
        <button disabled={props.followingProgress.some(id => id === props.id)} onClick={unFollow} className={ `${ style.user__btn } ${ style.follow }`}>
          <div className={ style.user__text }>Unfollow</div>
        </button>
        :
        <button disabled={props.followingProgress.some(id => id === props.id)} onClick={follow} className={ style.user__btn }>
          <div className={ style.user__text }>Follow</div>
        </button>
      }*/}
    </div>
  );
};

export default User;