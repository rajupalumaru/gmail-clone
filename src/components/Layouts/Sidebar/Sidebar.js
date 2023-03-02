import { Button } from '@mui/material'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelIcon from '@mui/icons-material/Label';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import './Sidebar.css';
import SidebarOptions from '../SidebarOptions/SidebarOptions';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} className='compose-btn'>Compose</Button>

      <SidebarOptions Icon={InboxIcon} title='Indox' number='234' />
      <SidebarOptions Icon={StarRateIcon} title='Starred' number='500' />
      <SidebarOptions Icon={WatchLaterIcon} title='Snoozed' number='300' />
      <SidebarOptions Icon={LabelImportantIcon} title='Important' number='452' />
      <SidebarOptions Icon={SendIcon} title='Sent' number='254' isactive={true} />
      <SidebarOptions Icon={DraftsIcon} title='Drafts' number='400' />
      <SidebarOptions Icon={LabelIcon} title='Category' number='100' />
      <SidebarOptions Icon={DeleteIcon} title='[map]/Trash' number='150' />
      <SidebarOptions Icon={FindInPageIcon} title='Documents' number='321' />
      <SidebarOptions Icon={ExpandMoreIcon} title='More' number='532' />
      <hr />
      <h3 className='SidebarOptions-heading'>Meet</h3>
      <SidebarOptions Icon={VideocamIcon} title='New Meeting' />
      <SidebarOptions Icon={KeyboardIcon} title='Join a Meeting' />
      <hr />
    </div>
  )
}

export default Sidebar
