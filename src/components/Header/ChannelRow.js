import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
  return (
    <div className='ChannelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image}/>
        <div className='channelRow_text'>
            <h4>{channel} {verified && <CheckCircleIcon/>}</h4>
            <p>{subs} subscribers  . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>

      
    </div>
  )
}

export default ChannelRow
