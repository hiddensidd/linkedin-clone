import "./Header.css"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
  return (
  <div>
      <div className='header'>
         <div className='header__left'>
             <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/>
             <div className='header__search'>
                 <SearchIcon />
                 <input type='text'/>
             </div>
         </div>
        
         <div className='header__right'>
             <HeaderOption Icone={HomeIcon} title='Home'/>
             <HeaderOption Icone={SupervisorAccountIcon} title='My Neetwork'/>
             <HeaderOption Icone={BusinessCenterIcon} title='Messag'/>
             <HeaderOption Icone={ChatIcon} title='Jobs'/>
             <HeaderOption Icone={NotificationsIcon} title='Notifications'/>
             <HeaderOption avatar="https://img.icons8.com/office/16/000000/avatar.png" title='Me'/>
             {/* <HeaderOption title='Me'/> */}
         </div>
     </div>
  </div>);
};
export default Header;