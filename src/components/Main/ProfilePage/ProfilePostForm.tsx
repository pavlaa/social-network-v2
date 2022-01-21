import React from 'react';
import style from "./ProfilePostForm.module.scss"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {PostData} from "./ProfileWall";



const ProfileForm: React.FC<InjectedFormProps<PostData>> = ({handleSubmit}) => {
  return (
    <div className={ style.whats }>
      <form onSubmit={handleSubmit}>
        <div className={ style.whats__input }>
          <Field name="post" component="input" type="text" placeholder="Whats new?" />
        </div>
        <div className={ style.whats__btn }>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

const ProfilePostForm = reduxForm<PostData>({ form: 'post' })(ProfileForm);

export default ProfilePostForm;