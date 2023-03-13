import React from 'react';
import './EmailBody.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from '../../../../redux/mailSilce';

const EmailBody = ({ name, subject, message, time }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sentMail = () => {
        dispatch(openMessage({
            name,
            subject,
            message,
            time
        }))
        history.push('/mail')
    }
    
    return (
        <div className='emailbody' onClick={sentMail}>
            <div className='emailbody-left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelIcon />
                <h4>{name}</h4>

            </div>
            <div className='emailbody-middle'>
                <div className='emailbody-middle-msg'>
                    <p ><b>{subject}</b>{message}</p>
                </div>

            </div>
            <div className='emailbody-right'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailBody
