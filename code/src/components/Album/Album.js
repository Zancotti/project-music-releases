import React from "react";
import "./album.css";
import { Artist } from "../Artist/Artist";

export const Album = ({ album }) => {
  return (
    <div className="album">
      <div className="image-container">
        <img src={album.images[1].url} />
      </div>
      <h2><a href={album.external_urls.spotify}>{album.name}</a></h2>
      <Artist artists={album.artists} />
    </div>
  );
};
