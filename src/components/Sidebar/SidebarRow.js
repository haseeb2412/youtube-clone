import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
import './SidebarRow.css'

const SidebarRow = ({title,Icon,selected}) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow_icon"/>
      <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
