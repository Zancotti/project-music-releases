import React from "react";
import "./artist.css";

/* Make a conditional to decide if it should be no char, or a , or a & between the artists*/
export const Artist = ({ artists }) => {
  return (
    <div className="artist-container">
      {artists.map((artist, i) => {
        let divider = "";

        if (i < artists.length - 2) {
          divider = ", ";
        } else if (i === artists.length - 2) {
          divider = " & ";
        }

        /* Set the key to artist.id and add a link over the artist name + a empty divider or , & inbetween when it is many artist*/
        return (
          <span key={artist.id}>
            <a href={artist.external_urls.spotify}>{artist.name}</a>
            {divider}
          </span>
        );
      })}
    </div>
  );
};
