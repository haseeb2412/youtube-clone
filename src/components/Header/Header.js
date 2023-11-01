import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch , setinputSearch] = useState('');
  return (
    <div className='header'>

        {/* header left  */}

        <div className='header-left'>
            <MenuIcon/>
            <Link > 
                <img className="header_logo" 
                // src="https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Youtube_Logo_2005.png/250px-Youtube_Logo_2005.png" 
                src="./mylogo.png" 
                style={{height :'37px',marginLeft:"8px"}}
                alt="Youtube Logo" />

            </Link>

        </div>

        {/* header input  */}

        <div className='header_input'>
            <input value={inputSearch} onChange={e => setinputSearch(e.target.value)} type='text' placeholder='search'/>
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header_inputbutton'/>
            </Link>
        </div>

        {/* header right */}


        <div className='header_icons'>
            <VideoCallIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon'/>
            <NotificationsIcon className='header_icon'/>
            <AccountCircleIcon/>
        </div>



    </div>
  )
}

export default Header
