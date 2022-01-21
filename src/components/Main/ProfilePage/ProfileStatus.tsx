import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateProfileStatusFetch} from "../../../store/action-creators/profileAction";


interface ProfileStatusProps {
  status: string | null;
  isUser: boolean
}
interface ProfileStateProps {
  editMode: boolean;
  localStatus: any; // тут был ступор, т.к приходит с сервера null, а value принимает только string | ReadonlyArray<string> | number | undefined
}                   // можно отловить значение в response и проверять что приходит и присваивать "". но пока пусть будет any

const ProfileStatus: React.FC<ProfileStatusProps> = ({status, isUser}) => {
  const [state, getState] = useState<ProfileStateProps>({
    editMode: false,
    localStatus: status
  })
  const dispatch = useDispatch()
  console.log(isUser)
  const activateEditMode = () => {
    if (isUser) {
      getState({...state, editMode: true});
    }
  }
  const deactivateEditMode = () => {
    getState({...state, editMode: false});
    dispatch(updateProfileStatusFetch(state.localStatus))
  }
  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getState({...state, localStatus: e.target.value});
  }

  return (
    <div>
      {
        state.editMode &&
        <input value={state.localStatus} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text"/>
      }
      {
        !state.editMode &&
        <span onClick={activateEditMode}>{status || '-'}</span>
      }
    </div>
  );
};

export default ProfileStatus;