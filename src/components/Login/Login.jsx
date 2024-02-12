import React, { useState } from 'react'
import './Login.css'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../../features/UserSlice'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()



    const LoginToApp = async (e) => {
        e.preventDefault()
      await  signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch(login({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    profilePic: user.photoURL,
                }));
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    };

    const register = async (e) => {

        e.preventDefault()
        if (!name) {
            alert('Enter Your Name');
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

                return updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic,
                });
            })
            .then(() => {

                const user = auth.currentUser;

                dispatch(login({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    profilePic: user.photoURL,
                }));
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    };


    return (
        <div className='login'>
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-LinkedIn-Logo.jpg" alt="" />

            <form >
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name (required if registering )' />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional )' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
                <button type='submit' onClick={LoginToApp} >Sign In</button>
            </form>
            <p>Not a member? <span className='login_register' onClick={register} >
                Register Now
            </span> </p>
        </div>
    )
}

export default Login
