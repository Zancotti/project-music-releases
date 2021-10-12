import React from "react";
import "./album.css";
import { Artist } from "../Artist/Artist";
import { Image } from "../Image/Image";

export const Album = ({ album }) => {
  return (
    <div className="album">
      <Image image={album.images[1]}/>
      <h2><a href={album.external_urls.spotify}>{album.name}</a></h2>
      <Artist artists={album.artists} />
    </div>
  );
};
