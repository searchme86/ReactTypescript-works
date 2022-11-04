import React from 'react';
import { Link } from 'react-router-dom';
import { SongType } from '../App';

type Props = { songs: Array<SongType> };

function SongList(props: Props) {
  let list = props.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: 'none' }}>
          {song.title} ({song.title})
        </Link>
      </li>
    );
  });
  return (
    <div className="">
      <h2 className="mt-4 mb-2">song List</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
}

export default SongList;
