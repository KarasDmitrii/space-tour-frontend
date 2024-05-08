import React from 'react';
import './App.scss';
import AppHeader from "../app-header/appHeader";
import AppHome from "../app-home/appHome";

function App() {
  return (
    <div className='app__background'>
      <AppHeader/>
      <AppHome/>
    </div>
  );
}

export default App;
