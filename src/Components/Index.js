import React from 'react';
import TrackList from './tracks/TrackList';
import { GlobalProvider } from '../Context/GlobalProvider';
import Search from './tracks/Search';

const Index = () => {
  console.log("rendering index");
  return (
    <GlobalProvider>
      <Search />
      <TrackList />
    </GlobalProvider>
  );
};
export default Index;
