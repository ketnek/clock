import React from 'react';
import './App.css';
import { Break } from './app/components/break';
import { Session } from './app/components/session';
import { Timer } from './app/components/timer';
import { ControlPanel } from './app/components/controlPanel';
import { Footer } from './app/components/footer';


function App() {

  return (
    <div id='app'>

      <h1 id='appHeadline'>25 + 5 Clock</h1>
      <Break />
      <Session />
      <Timer />
      <ControlPanel />
      <Footer />

    </div>
  );
}

export default App;
