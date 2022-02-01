import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOption.css'
function HeaderOption({avatar, Icone, title}) {
  return <div className='headerOption'>
    {Icone && <div className='headerOption__icone'>{<Icone />}</div>}
    {avatar && (
      <Avatar className='headerOption__icon' src={avatar}/>
    )}
    <h6 className='headerOption__title'>{title}</h6>
  </div>;
}

export default HeaderOption;
