import { Avatar } from '@mui/material';  
import React from 'react';
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return <div className='sidebar'>
      <div className='sidebar__top'>
          <img src='https://images.unsplash.com/photo-1614853035986-b230d7d5679c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=gradienta-kETkTQvJ7BI-unsplash.jpg' alt=''/>
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
         
      </div>

      <div className='sidebar__bottom'>
            <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('java')}
                {recentItem('python')}
                {recentItem('database')}
        </div>
  </div>;
}

export default Sidebar;
