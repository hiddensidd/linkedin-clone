import { Avatar } from '@mui/material';  
import React from 'react';
import "./Sidebar.css"

function Sidebar() {
  return <div className='sidebar'>
      <div className='sidebar__top'>
          <img src='' alt=''/>
          <Avatar className='sidebar__avatar'/>
          <h2>Siddharth</h2>
          <h4>siddharth.gmial.com</h4>
      </div>

      <div className='sidebar__stats'>
         <div className='sidebar__stat'>
            <p>Who viewed your profile</p> 
            <p className='sidebar__statNumber'>2,569</p>
         </div>
      
         <div className='sidebar__stat'>
             <p>Views on post</p> 
             <p className='sidebar__statNumber'>2,569</p>
         </div>

        <div className='sidebar__button'>
            <p>Button</p>
        </div>

      </div>
  </div>;
}

export default Sidebar;
