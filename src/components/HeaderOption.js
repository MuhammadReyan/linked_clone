import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

function HeaderOption({ avatar, Icon, title, onclick }) {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <div onClick={onclick} className='headerOption'>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon"  >
          {user?.email[0]}
        </Avatar>

      )}
      <h5 className='headerOption_title'> {title} </h5>
    </div>
  );
}

export default HeaderOption
