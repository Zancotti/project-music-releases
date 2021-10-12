import React, { useState } from 'react';
import "./image.css";
import { ReactComponent as DotsSvg } from '../../icons/dots.svg';
import { ReactComponent as HeartSvg } from '../../icons/heart.svg';
import { ReactComponent as PlaySvg } from '../../icons/play.svg';

export const Image = ({ image }) => {

    const [iconContainerStyle, setIconContainerStyle] = useState({
        display:"none"
    });

    const [imageOpacityStyle, setImageOpacityStyle] = useState({
        opacity: "100%"
    });


return (
    <div 
    className="image-container" 
    onMouseEnter={() => {
        setIconContainerStyle({display: "flex"});
        setImageOpacityStyle ({opacity: "40%"});
    }}
    
    onMouseLeave={() => {
        setIconContainerStyle({display:"none"});
        setImageOpacityStyle ({opacity: "100%"});
    }}
    >

        <div className="icon-container" style={iconContainerStyle}>
            <HeartSvg className="icon heart"></HeartSvg>
            <PlaySvg className="icon play"></PlaySvg>
            <DotsSvg className="icon dots" ></DotsSvg>
        </div>
        <img src={image.url} alt="An albumcover" style={imageOpacityStyle}/>
    </div>
)   
}

