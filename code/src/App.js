import React from "react";
import data from "./data.json";
import playlistData from "./stretch-goal.json";
import { Album } from "./components/Album/Album";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const App = () => {
  const albums = data.albums.items;
  const playlists = playlistData.playlists.items;

  return (
    <div className="content">
      <section className="sidebar-container">
        <h1>Popular playlists</h1>
        <Sidebar playlists={playlists} />
      </section>
      <section className="main-container">
        <h1>New albums & Singles</h1>
        <div className="albums-container">
          {albums.map((album) => {
            return <Album key={album.id} album={album} />;
          })}
        </div>
      </section>
    </div>
  );
};
