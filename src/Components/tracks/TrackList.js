import React, { useContext } from 'react';
import Track from './Track';
import { GlobalContext } from '../../Context/GlobalProvider';
import Spinner from '../Spinner';

const TrackList = () => {
  console.log("rendering tracklist");
  const [state] = useContext(GlobalContext);
  const { track_list, Heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h3 className='text-center mb-4'>{Heading}</h3>
        <div className='row'>
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default TrackList;
