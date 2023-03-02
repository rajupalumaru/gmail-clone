import React from 'react';
import './EmailBody.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';

const EmailBody = () => {
    return (
        <div className='emailbody'>
            <div className='emailbody-left'>
                <CheckBoxOutlineBlankIcon/>
                <StarBorderIcon/>
                <LabelIcon/>
                <h4>Raju Palumaru</h4>

            </div>
            <div className='emailbody-middle'>
                <div className='emailbody-middle-msg'>
                    <p><b>Subject</b>This is message body</p>
                </div>

            </div>
            <div className='emailbody-right'>
                  <p>02:30 PM</p>
            </div>
        </div>
    )
}

export default EmailBody
