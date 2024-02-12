import React from 'react'
import './InputOptions.css'

function FeedInputOptions({ Icon, title, color }) {
    return (
        <div className='feedInputOptions'>
            <Icon style={{ color: color }} />
            <h4>{title} </h4>
        </div>
    )
}

export default FeedInputOptions
