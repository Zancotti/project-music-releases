import React from 'react'
import data from './data.json'
import { Album } from './components/Album/Album'

console.log(data)

export const App = () => {
  const albums = data.albums.items;

  return (
    <div>
      <h1>New albums & Singles</h1>
      <div className="albums-container">
        {albums.map((album) => {
          return <Album album={album}/>;
        })}
      </div>
    </div>
  )
}
