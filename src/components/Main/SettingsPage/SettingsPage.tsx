import React from 'react';
import style from "./SettingsPage.module.scss";
import SettingsForm from "./SettingsForm";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ProfileType} from "../../../types/types";
import {saveProfileInfo} from "../../../store/action-creators/profileAction";
import {useDispatch} from "react-redux";

const SettingsPage = () => {
  const {profile} = useTypedSelector(state => state.profile)
  const dispatch = useDispatch()

  const onSubmit = (formData: ProfileType) => {
    if (profile.userId) {
      dispatch(saveProfileInfo(formData, profile.userId))
    }
  }

  return (
    <div className={ style.settings }>
      <div className={ style.settings__container }>
        <SettingsForm initialValues={profile} onSubmit={ onSubmit } />
      </div>
    </div>
  );
};

export default SettingsPage;