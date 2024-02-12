import React, { useEffect, useState } from 'react'
import './Feed.css'
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions';

// Material Ui Icon
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from '../Post/Post';
import { addDoc, collection, db, onSnapshot, orderBy, query, serverTimestamp } from '../../firebaseConfig.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice.js';
import FlipMove from 'react-flip-move';


function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser)
  console.log(input)
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        );
      }
    );

    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoURL || '',
        timestamp: serverTimestamp()
      });

      setInput('');
      console.log('Post added successfully!');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className='feed_inputOptions'>
          <FeedInputOptions Icon={ImageIcon} title={'Media'} color={'#70B5F9'} />
          <FeedInputOptions Icon={EventIcon} title={'Event'} color={'#c37d16'} />
          <FeedInputOptions Icon={ArticleIcon} title={'Write Article'} color={'#E06847'} />
        </div>
      </div>

      <FlipMove>


        {posts?.map(({ id, data: { name, description, message, photoUrl } }) => (

          <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      </FlipMove>

      {/* Hard-coded Post */}
      {/* <Post name={'Sonny Sangha'} description={'Description'} message={'message'} /> */}
    </div>
  );
}


export default Feed
