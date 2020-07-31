import React from 'react';
import spinner from '../Assets/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading'
        style={{
          width: '200px',
          margin: ' 40px auto',
          display: 'block'
        }}></img>
    </div>
  );
};
export default Spinner;
