import React from "react";
import "./sidebar.css";

export const Sidebar = ({ playlists }) => {
  return (
    <div className="playlist-container">
      {/*Map over playlists to get one of the playlists, fetch the img, name and owner of playlist and
        add a link around the playlist name that goes to the website  */}
      {playlists.map((playlist) => {
        return (
          <div key={playlist.id} className="playlist-image-text-container">
            <img src={playlist.images[0].url} alt="Playlist coverimage" />
            <div className="playlist-text-container">
              <h2>
                <a href={playlist.external_urls.spotify}>{playlist.name}</a>
              </h2>
              <span>{playlist.owner.display_name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
