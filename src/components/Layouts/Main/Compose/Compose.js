import React from 'react';
import './Compose.css';

import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../../../redux/mailSilce';

const Compose = () => {
    const dispatch=useDispatch();
    return (
        <div className='compose'>
            <div className='compose-header'>
                <div className='compose-left'>
                    <span>New Message</span>
                </div>
                <div className='compose-right'>
                    <MinimizeIcon/>
                    <OpenInFullIcon/>
                    <CloseIcon onClick={()=>dispatch(closeSendMessage())} />

                </div>
            </div>
            <div className='compose-body'>
                <div className='compose-bodyForm'>
                    <input type='email' placeholder='Reciepents'/>
                    <input type='text' placeholder='Subject'/>

                    <textarea rows='20'></textarea>

                </div>

            </div>
            <div className='compose-footer'>
                <div className='compose-footerLeft'>
                    <button type='submit'> Send <ArrowDropDownIcon/></button>

                </div>
                <div className='compose-footerRight'>
                    <FormatColorTextIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <InsertEmoticonIcon/>
                    <NoteAddIcon/>
                    <InsertPhotoIcon/>
                    <PhonelinkLockIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    <DeleteIcon/>

                </div>

            </div>

        </div>
    )
}

export default Compose
