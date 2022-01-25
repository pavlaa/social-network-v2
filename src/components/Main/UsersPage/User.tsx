import React from 'react';
import style from  "./User.module.scss"
import {UserTypes} from "../../../types/types";
import {Link} from "react-router-dom";
import userPhoto from '../../../img/user.svg';
import {useDispatch} from "react-redux";
import {followUser, unfollowUser} from "../../../store/action-creators/userAction";

interface UserItemProps {
  user: UserTypes;
  followingProgress: any[]
}

const User: React.FC<UserItemProps> = ({user, followingProgress}) => {
  const dispatch = useDispatch();

  function follow() {
    dispatch(followUser(user.id))
  }
  function unfollow() {
    dispatch(unfollowUser(user.id))
  }

  return (
    <div className={style.user}>
      <Link to={'/profile/' + user.id}>
        <div className={style.user__info}>
          <div className={style.user__photo}>
            <img src={(user.photos.small !== null) ? user.photos.small : userPhoto} alt="user-photo"/>
          </div>
          <div className={style.user__descr}>
            <div className={style.user__fullname}>
              {user.name}
            </div>
            <div className={style.user__status}>
              {user.status}
            </div>
          </div>
        </div>
      </Link>
      {user.followed ?
        <button disabled={followingProgress.some(id => id === user.id)} onClick={unfollow}
                className={`${style.user__btn} ${style.follow}`}>
          <div className={style.user__text}>Unfollow</div>
        </button>
        :
        <button disabled={followingProgress.some(id => id === user.id)} onClick={follow}
                className={style.user__btn}>
          <div className={style.user__text}>Follow</div>
        </button>
      }
    </div>
  );
};

export default User;