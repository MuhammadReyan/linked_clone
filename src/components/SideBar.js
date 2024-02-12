import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice'



function SideBar() {

    const user = useSelector(selectUser)

    const recentItem = ((topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'> # </span>
            <p> {topic} </p>
        </div>
    ))




// console.log(user)


    return (
        <div className="sidebar" >
            <div className="sidebar_top">
                <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                    alt=""
                />
                <Avatar className="sidebar_avatar" src={user.photoURL} />
                <h2> {user.displayName}  </h2>
                <h4> {user.email} </h4>

            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,999</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,499</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {/* Add more content as needed */}
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('hacking')}
                {recentItem('developing')}
                {recentItem('creating')}
                {recentItem('backend developer')}

            </div>
        </div>
    );
}

export default SideBar
