import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';

const Player = ({currentSong, audioRef, playing, setPlaying}) => {
    //Player States
    const [songData, setSongData] = useState({
        duration: 0,
        currentTime: 0
    });


    const audioHandler = () => {
        if (playing) audioRef.current.pause();
        else audioRef.current.play();
        setPlaying(!playing);
    }

    //Handlers
    const durationHandler = (e) => {
        let timeRaw = e.target.currentTime;
        let durationRaw = e.target.duration;
        setSongData({
            duration: durationRaw,
            currentTime: timeRaw
        });
    }

    const rangeDragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongData({...songData, currentTime: e.target.value});
    }

    return (
        <div className="player-container">
            <div className="timer-control">
                <p>{(songData.currentTime%60>10) ? `${Math.floor(songData.currentTime/60)}:${Math.floor(songData.currentTime%60)}` : `${Math.floor(songData.currentTime/60)}:0${Math.floor(songData.currentTime%60)}`}</p>
                <input 
                min="0" 
                max={songData.duration || 0} 
                value={songData.currentTime} 
                type="range" 
                onChange={rangeDragHandler}/>
                <p>{`${Math.floor(songData.duration/60)}:${Math.floor(songData.duration%60)}`}</p>
            </div>
            <div className="song-control">
                <FontAwesomeIcon className="previous-icon" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play-icon" size="2x" icon={(!playing) ? faPlay : faPause} onClick={audioHandler}/>
                <FontAwesomeIcon className="next-icon" size="2x" icon={faAngleRight}/>
            </div>
            <audio src={currentSong.link} ref={audioRef} onTimeUpdate={durationHandler} onLoadedMetadata={durationHandler}></audio>
        </div>
    );
}

export default Player;