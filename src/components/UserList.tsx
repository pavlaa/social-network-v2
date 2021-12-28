import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers, setUsersPage} from "../store/action-creators/userAction";
import UserItem from "./UserItem";

const UserList: React.FC = () => {

  const {users, loading, error, totalUsers, currentPage, limit} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers(currentPage, limit))
  }, [currentPage])

  const pageCount = Math.ceil(totalUsers / limit);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      <h2>{totalUsers}</h2>
      {users.map(user =>
        <UserItem key={user.id} user={user} />
      )}
      <div style={{display: 'flex'}}>
        {pages.map(p =>
          <div
            onClick={() => dispatch(setUsersPage(p))}
            key={p}
            style={{border:p === currentPage ? '2px solid green' : '1px solid black', padding: 10}}
          >{p}</div>
        )}
      </div>
    </div>
  );
};

export default UserList;