import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';      
import { db, } from './firebase';
import { firebaseApp } from 'firebase/app';

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection("posts").onSnapshot((snapshot) =>
           setPosts(
               snapshot.docs.map((doc) => (
               {
                   id: doc.id,
                   data: doc.data()
               }
           )))
       );
       
    }, []);


    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Siddharth Yadav',
            description: 'This is the test', 
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()    
        })
    };
        setInput("");

        useEffect(() => {
            
            console.log(posts)

        }, [posts]);

  return <div className='feed'>
     <div className='feed__inputContainer'>
         <div className='feed__input'>
             <CreateIcon/>
             <form>
                 <input value={input} onChange={ e=> setInput(e.target.value)} type="text"/>
                 <button onClick={sendPost} type="submit">send</button>
             </form>
         </div>

          <div className='feed__inputOptions'>
             <InputOption Icone={ImageIcon} title='Photo' color='#70B5F9'/> 
             <InputOption Icone={SubscriptionsIcon} title='Vedio' color='#E7A33E'/>
             <InputOption Icone={EventNoteIcon} title='Event' color='#C0CBCD'/>  
             <InputOption Icone={CalendarViewDayIcon} title='Write artical' color='#7FC15E'/> 
          </div>
     </div>
        {/* post */}
        {posts.map(({id, data: { name, description, message, photoUrl}}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        <Post 
            name='Siddhart Yadav' 
            description='This is test of linkedin-clone'  
            message='this is post section' 
        />
  </div>;
}

export default Feed;
