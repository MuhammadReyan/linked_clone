import React from 'react'
import './Header.css'
// Material UI Icons
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { BusinessCenterOutlined, SupervisorAccount } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, } from 'react-redux';
import { logOut, } from '../features/UserSlice';
import { auth } from '../firebaseConfig';
function Header() {
  
  const dispatch = useDispatch()

  const logOutOfApp = async () => {
    // Sign out the user from Firebase Authentication
    await auth.signOut()
      .then(() => {
        // Dispatch the logOut action to update Redux store
        dispatch(logOut());
      })
      .catch((error) => {
        // Handle sign-out errors if needed
        console.error('Error signing out:', error.message);
      });
  };


  return (
    <div className='header'>

      <div className='header_left'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='' />
        <div className='header_search'>
          {/* Search Icon */}
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>


      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenterOutlined} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          // avatar={'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}
         avatar={true}
          title='me'
          onclick={logOutOfApp}
        />

      </div>

    </div>
  )
}

export default Header
