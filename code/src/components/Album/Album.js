import React from 'react';
import "./album.css";
import { Artist } from '../Artist/Artist'

export const Album = ({ album }) =>{
    return (
        <div className="album">
            <img src={album.images[1].url}/>
            <h2>{album.name}</h2>
            <Artist artists={album.artists}/>
        </div>
    )
}