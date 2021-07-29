import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect} from 'react';
import { changeActiveSong, playNewAudio } from '../utils';

const Player = ({currentSong, audioRef, playing, setPlaying, songs, setCurrentSong, setSongs}) => {
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
        progressBarAnim(timeRaw, durationRaw);
    }

    const rangeDragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongData({...songData, currentTime: e.target.value});
    }

    const songSkipHandler = async (forward) => {
        const currentIndex = songs.findIndex(s => s.id === currentSong.id);
        if(forward){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else if (!forward){
            if(currentIndex===0) await setCurrentSong(songs[songs.length-1]);
            else await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        playNewAudio(playing, audioRef);
    }

    useEffect(() => {
        changeActiveSong(songs, currentSong, setSongs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong]); 

    const [progress, setProgress] = useState(0);
    
    const progressBarAnim = (time, duration) => {
        const timeRounded = Math.round(time);
        const durationRounded = Math.round(duration);
        setProgress(Math.round(timeRounded/durationRounded * 100));
    }

    const songEndHandler = async () => {
        const currentIndex = songs.findIndex(s => s.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        playNewAudio(playing, audioRef);
    }
    return (
        <div className="player-container">
            <div className="timer-control">
                <p>{(songData.currentTime%60>10) ? `${Math.floor(songData.currentTime/60)}:${Math.floor(songData.currentTime%60)}` : `${Math.floor(songData.currentTime/60)}:0${Math.floor(songData.currentTime%60)}`}</p>
                
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="slider-container">
                    <input 
                    min="0" 
                    max={songData.duration || 0} 
                    value={songData.currentTime} 
                    type="range" 
                    onChange={rangeDragHandler}/>

                    <div style={{transform: `translateX(${progress+2}%)`}} className="progress-bar"></div>
                </div>
                
                <p>{songData.duration ? `${Math.floor(songData.duration/60)}:${Math.floor(songData.duration%60)}` : `0:00`}</p>
            </div>
            <div className="song-control">
                <FontAwesomeIcon onClick={() => songSkipHandler(0)} className="previous-icon" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play-icon" size="2x" icon={(!playing) ? faPlay : faPause} onClick={audioHandler}/>
                <FontAwesomeIcon onClick={() => songSkipHandler(1)} className="next-icon" size="2x" icon={faAngleRight}/>
            </div>
            <audio onEnded={songEndHandler} src={currentSong.link} ref={audioRef} onTimeUpdate={durationHandler} onLoadedMetadata={durationHandler}></audio>
        </div>
    );
}

export default Player;