import React from 'react';
import './InputOption.css'

function InputOption({Icone, title, color}) {
  return <div className='inputOption'>
    <Icone style={{ color: color}}/>
    <h4>{title}</h4>
  </div>;

}

export default InputOption;
