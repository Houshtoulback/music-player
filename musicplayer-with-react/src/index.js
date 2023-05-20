import React from 'react';
import ReactDOM from 'react-dom/client';

import Wrapper from './Components/Wrapper.js'

function MusicPlayer(){
  return (
      <Wrapper/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MusicPlayer />);