import React from 'react';
import "./artist.css";


export const Artist = ({artists}) =>{
    console.log(artists);
    return(
        <span>
            {artists.map((artist)=>{
                return(
                    <span>{artist.name}</span>
                );
            })}
        </span>
    );

};