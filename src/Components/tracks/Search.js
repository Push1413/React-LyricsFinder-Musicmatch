import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../Context/GlobalProvider';

const Search = () => {
  console.log("rendering search");
  const [ip, setip] = useState();
  const [searchkey, setsearchkey] = useState();
  const [, setState] = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${searchkey}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, Heading: 'Search Results' });
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchkey]);

  const handleChange = e => {
    setip(e.target.value);
  };

  const findTrack = e => {
    e.preventDefault();
    setsearchkey(ip);
  };

  return (
    <div className='card card-body mb-4 p-4'>
      <h1 className='display-4 text-center'>
        <i className='fas fa-music' /> Search For A Song
      </h1>
      <p className='lead text-center'>Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Song title...'
            name='ip'
            value={ip}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};
export default Search;
