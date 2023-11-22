import React from 'react';

import './messages.css'

const Message = ({name, message, isCurrentUser}) => {
    return (
        isCurrentUser ? 
            <div className='myMsg'>
                <div>
                    {name}
                </div>
                <p>
                    {message}
                </p>
            </div>
        :
        name !== 'admin' ? 
        <div className='otherMsg'>
            <div>
                {name}
            </div>
            <p>
                {message}
            </p>
        </div>
        :
        <div className='sysMsg'>
            <span>
                {message}
            </span>
        </div>
    )
};

export default Message;