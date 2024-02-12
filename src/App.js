import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, login, selectUser } from './features/UserSlice';
import Login from './components/Login/Login';
import { auth, onAuthStateChanged } from './firebaseConfig';
import Widgets from './components/Widgets/Widgets';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(logOut(null));
      }
    });


    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      {/* App ___ Body */}

      {!user ? <Login /> : (
        <div className='app_body'>
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}



    </div>
  );
}

export default App;
