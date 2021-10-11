import React from 'react';
import "./album.css";

export const Album = ({ album }) =>{
    return (
        <div className="album">
            <img src={album.images[1].url}/>
            <h2>{album.name}</h2>
            <span>Album artist</span>
        </div>
    )
}