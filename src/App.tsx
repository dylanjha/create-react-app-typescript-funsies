import React from 'react';
import logo from './logo.svg';
import '@mux/mux-video';
import './App.css';

interface MuxVideoHTMLAttributes<T> extends React.VideoHTMLAttributes<T> {
  debug?: boolean;
  autoplay?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mux-video': React.DetailedHTMLProps<MuxVideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <mux-video
          playback-id="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
          env-key="mux-data-env-key"
          metadata-video-title="Big Buck Bunny"
          metadata-viewer-user-id="user-id-1234"
          controls
        ></mux-video>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
