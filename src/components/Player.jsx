import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player-container">
            <div className="timer-control">
                <p>Current time</p>
                <input type="range"/>
                <p>Total length</p>
            </div>
            <div className="song-control">
                <FontAwesomeIcon className="previous-icon" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play-icon" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="next-icon" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default Player;