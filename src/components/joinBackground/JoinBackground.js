import React, {useState} from 'react';

import "./joinBackground.css";

const JoinBackground = () => {
    const [top, setTop] = useState('0');
    const [left, setLeft] = useState('0');

    return (
        <>
            <div className="join_bg_container" onMouseMove={(e) => {
                setTop(e.clientY);
                setLeft(e.clientX);
            }}>            
                <div className="join_cursor" style = {{'top' : top + 'px', left : left + 'px'}}></div>
                
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>
                <div className="join_bg_row">               
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>
                    <div className="hexagon"></div>                
                </div>                   
            </div>
        </>
    );
}

export default JoinBackground;