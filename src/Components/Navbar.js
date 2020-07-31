// rfc to create functional component
import React, { memo } from 'react';

const Navbar = () => {
  console.log("rendering navbar");

  return (
    <nav className='navbar navbar-dark bg-dark mb-5'>
      <span className='navbar-brand mb-0 h1 mx-auto'>LyricsFinder</span>
    </nav>
  );
};
export default memo(Navbar);
