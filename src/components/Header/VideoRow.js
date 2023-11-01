import React from 'react'
import './VideoRow.css'

const VideoRow = ({views ,subs,description,channel,timestamp,title,image}) => {
  return (
    <div className='VideoRow'>
      <img src={image} alt=''/>
      <div className='videoRow_text'>
        <h3>{title}</h3>
        <p className='VideoRow_headline'>{channel} .{""} 
        
        <span className="VideoRow_subs">
                        <span className="VideoRow_subsnumber">{subs}</span> Subscribers 
                    </span> {" "}
        
        {views} views . {timestamp}</p>
        <p className='VideoRow-description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
