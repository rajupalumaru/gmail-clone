import React, { useState } from 'react';
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
import db from '../../../../firebase';
import firebase from 'firebase';

const Compose = () => {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        if (to === "") {
            return alert('to is required');
        }
        if (subject === "") {
            return alert('subject is required');
        }
        if (message === "") {
            return alert('message is required');
        }
         
        db.collection('emails').add({
            to,
            subject,
            message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTo("");
        setMessage("");
        setSubject("");
    
        alert("Email sent successfully");
        dispatch(closeSendMessage())

    }
    return (
        <div className='compose'>
            <div className='compose-header'>
                <div className='compose-left'>
                    <span>New Message</span>
                </div>
                <div className='compose-right'>
                    <MinimizeIcon />
                    <OpenInFullIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} />

                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className='compose-body'>
                    <div className='compose-bodyForm'>
                        <input type='email' name='email' placeholder='Reciepents' value={to} onChange={(e) => setTo(e.target.value)} />
                        <input type='text' name='subject' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea rows='20' name='message' value={message} onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                    </div>
                </div>
                <div className='compose-footer'>
                    <div className='compose-footerLeft'>
                        <button type='submit'> Send <ArrowDropDownIcon /></button>
                    </div>
                    <div className='compose-footerRight'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <InsertPhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose
