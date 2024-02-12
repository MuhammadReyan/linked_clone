import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
import { forwardRef } from 'react'



const Post = forwardRef( ({ name, description, message, photoUrl },ref) => {

    console.log(name)

    return (
        <div ref={ref} className='post'>
            <div className='post_header'>

                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className='post_info'>
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message} </p>
            </div>

            <div className='post_buttons'>

                <FeedInputOptions Icon={ThumbUpOffAltIcon} title={'Like'} color={'gray'} />
                <FeedInputOptions Icon={ChatOutlined} title={'Comments'} color={'gray'} />
                <FeedInputOptions Icon={ShareOutlined} title={'Share'} color={'gray'} />
                <FeedInputOptions Icon={SendOutlined} title={'Send'} color={'gray'} />
            </div>


        </div>
    )
})

export default Post