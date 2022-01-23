import React from 'react';
import {Post, Profile} from "../../../types/types";
import ProfilePost from "./ProfilePost";
import ProfilePostForm from "./ProfilePostForm";
import {useDispatch} from "react-redux";
import {ProfileActionTypes} from "../../../types/profileTypes";

export interface PostData {
  post: string;
}
interface ProfileWallProps {
  posts: Post[];
  profile: Profile;
}

const ProfileWall: React.FC<ProfileWallProps> = ({profile, posts}) => {
  const profilePost = posts.map(post => <ProfilePost key={post.id} name={post.name} message={post.message} profile={profile}/>)
  const dispatch = useDispatch()

  const sendPost = (post: PostData) => {
    dispatch({type: ProfileActionTypes.SEND_POST, payload: post.post})
  }

  return (
    <div>
      <ProfilePostForm onSubmit={sendPost}/>
      {profilePost}
    </div>
  );
};

export default ProfileWall;