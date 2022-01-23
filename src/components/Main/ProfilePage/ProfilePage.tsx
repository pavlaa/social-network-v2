import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import style from "./ProfilePage.module.scss";
import userLarge from '../../../img/user-large.png';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {ProfileFetch, ProfileStatusFetch, updateProfilePhotoFetch} from "../../../store/action-creators/profileAction";
import ProfileStatus from "./ProfileStatus";
import ProfileWall from "./ProfileWall";


const ProfilePage: React.FC = () => {
  const {id} = useParams<string>()
  const {profile, posts, status, loading, error} = useTypedSelector(state => state.profile)
  const {id: profileID} = useTypedSelector(state => state.auth)
  const [isOwner, getIsOwner] = useState(!id)
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(ProfileFetch(id))
      dispatch(ProfileStatusFetch(id))
    } else if (profileID) {
      dispatch(ProfileFetch(profileID))
      dispatch(ProfileStatusFetch(profileID))
    }
  }, [])

  const mainPhotoUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      dispatch(updateProfilePhotoFetch(e.target.files[0]))
    }
  }

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
            {
              isOwner &&
                <input onChange={mainPhotoUpdate} type="file"/>
            }
          </div>
          <div className={ style.user__descr }>
            <div className={ style.user__name }>
              {profile.fullName}
            </div>
            <div className={ style.user__status }>
              <ProfileStatus status={status} isOwner={isOwner}/>
            </div>
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
        <ProfileWall profile={profile} posts={posts}  />
      </div>
    </div>
  );
};

export default ProfilePage;