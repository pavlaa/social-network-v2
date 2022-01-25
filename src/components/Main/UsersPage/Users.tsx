import React, {useEffect, useState} from 'react';
import style from "./Users.module.scss";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers, setUsersPage} from "../../../store/action-creators/userAction";
import User from "./User";

const Users: React.FC = () => {
  const {users, loading, error, totalUsers, currentPage, limit, portionSize} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  const usersElements = users.map((user) => <User key={user.id} user={user} />)

  useEffect(() => {
    dispatch(fetchUsers(currentPage, limit))
  }, [currentPage])

  const pagesCount = Math.ceil(totalUsers / limit);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize ;


  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={style.users}>
      <div className={style.users__container}>
        <div className={style.users__find}>
          <div className={style.users__text}>
            Find users: {totalUsers}
          </div>
        </div>
        <div className={style.users__nav}>
          {
            portionNumber > 1 &&
            <span onClick={() => {setPortionNumber(portionNumber - 1)}}>Back</span>
          }
          {
            pages
              .filter(page => (page >= leftPortionNumber && page <= rightPortionNumber))
              .map(page => {
                return <span className={currentPage === page && style.active}
                             key={page}
                             onClick={() => dispatch(setUsersPage(page))}
                >{page}</span>;
              })
          }
          {
            portionNumber < portionCount &&
            <span onClick={() => {setPortionNumber(portionNumber + 1)}}>Forward</span>
          }
        </div>
        { usersElements }
      </div>
    </div>
  );
};

export default Users;