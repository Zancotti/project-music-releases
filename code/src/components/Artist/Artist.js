import React from 'react';
import "./artist.css";


export const Artist = ({artists}) =>{

    console.log(artists);
    return(
        <div className="artist-container">
            {artists.map((artist, i) => {
                 let divider = "";

                 if ( i < artists.length -2) {
                     divider = ", "
                 }
                 else if (i === artists.length -2) {
                     divider = " & "
                 }

                return(
                    <span><a href={artist.external_urls.spotify}>{artist.name}</a>{divider}</span>
                );
            })}
        </div>
    );
};