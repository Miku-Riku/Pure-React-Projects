import React from 'react';

import './messages.css'

const Message = ({myName, currMsg, prevMsg, message}) => {
    return (
         myName === currMsg ?            
            currMsg !== prevMsg ? 
                <div className='myMsg'>
                    <div>
                        <div>
                            {myName}
                        </div>
                        <p>
                            {message}
                        </p>
                    </div>
                </div>
                :
                <div className='myNextMsg'>
                    
                        <p>
                            {message}
                        </p>
                    
                </div>            

        : 
        /*its not my message right now, its either others or admins*/

        
        currMsg !== 'admin' ?  // if other people msg :
            currMsg !== prevMsg ?
                //other first messge
                <div className='otherMsg'>
                    <div>
                        <div>
                            {currMsg}
                        </div>
                        <p>
                            {message}
                        </p>
                    </div>
                </div>
                :
                //other next msg
                <div className='otherNextMsg'>                   
                       
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