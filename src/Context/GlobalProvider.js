import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    track_list: [],
    Heading: ''
  });

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM}`
      )
      .then(res =>
        setState({
          track_list: res.data.message.body.track_list,
          Heading: 'Top 10 Tracks'
        })
      );
  }, []);

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};
