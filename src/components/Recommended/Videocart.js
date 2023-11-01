import React from 'react'

import './VideoCart.css'
import Avatar from '@material-ui/core/Avatar';


const Videocart = ({image,title,channel,views,timestamp,channelImage}) => {
  return (
    <div className='videoCart'> 
        <img className='videoCart_thumbnail' src={image} alt='image'/>
        <div className='videoCart_info'>
            <Avatar className="videoCart_avatar" alt={channel} src={channelImage}/>
            <div className='video_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
        </div>
        {/* <div className='video_text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} . {timestamp}
            </p>
        </div> */}
     {/* <h2>this is the video cart</h2>  */}
    </div>
  )
}

export default Videocart
