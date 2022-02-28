import React from 'react';
import './Post.css'
import { Avatar} from "@material-ui/core";
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return <div className='post'>
      <div className='post__header'>
        <Avatar />
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icone={ThumbUpAltIcon} title='Like' color='grey'/>
        <InputOption Icone={ChatIcon} title='Comment' color='grey'/>
        <InputOption Icone={ShareIcon} title='Share' color='grey'/>
        <InputOption Icone={SendIcon} title='Send' color='grey'/>
      </div>
  </div>;
}

export default Post;