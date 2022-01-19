import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import style from "./ProfilePage.module.scss";
import userLarge from '../../../img/user-large.png';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {ProfileFetch} from "../../../store/action-creators/profileAction";

type ProfilePageParams = {
  id: string
}

const ProfilePage: React.FC = () => {
  const {id} = useParams<ProfilePageParams>()
  const {profile, posts, status, loading, error} = useTypedSelector(state => state.profile)
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(ProfileFetch(id))
    }
  }, [])

  if (loading || !profile) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={ style.profile }>
      <div className={ style.profile__container }>
        <div className={ `${ style.profile__user } ${ style.user }` }>
          <div className={ style.user__img }>
            <img
              src={profile.photos.large ? profile.photos.large : userLarge}
              alt="photo-user"/>
          </div>
          <div className={ style.user__descr }>
            <div className={ style.user__name }>
              {profile.fullName}
            </div>
            {/*<div className={ style.user__status }>
              <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
            </div>*/}
            {/*<div className={ style.user__contacts }>
              {
                Object.keys(props.userProfile.contacts).map(key => {
                  let result = contactsLinkHelper(props.userProfile.contacts[key], key);
                  return result;
                })
              }
            </div>*/}
            <div className={ style.user__about }>
              {profile.aboutMe && <span>About me: {profile.aboutMe}</span> }
            </div>
            <div className={ style.user__skills }>
              {profile.lookingForAJobDescription && <span>Skills: {profile.lookingForAJobDescription}</span>}
            </div>
          </div>
        </div>
        {/*<WallContainer userProfile={props.userProfile}  />*/}
      </div>
    </div>
  );
};

export default ProfilePage;