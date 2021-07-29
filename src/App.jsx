//React
import {useState, useRef} from "react";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./data";
import Navbar from "./components/Navbar";
//StyleSheet
import "./styles/app.scss"

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);
  const [libDisplay, setLibDisplay] = useState(false);
  //Audio Ref
  const audioRef = useRef(null);

  return (
    <div className={`App ${libDisplay ? 'lib-active' : ''}`}>
      <Navbar setLibDisplay={setLibDisplay} libDisplay={libDisplay}/>
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} audioRef={audioRef} playing={playing} setPlaying={setPlaying} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} setPlaying={setPlaying} audioRef={audioRef} playing={playing} setSongs={setSongs} libDisplay={libDisplay}/>
    </div>
  );
}

export default App;
