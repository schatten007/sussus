import { changeActiveSong, playNewAudio } from "../utils";

const LibraryTrack = ({songs, song, setCurrentSong, setPlaying, audioRef, playing, setSongs}) => {
    const libSongHandler = async () => {
        await setCurrentSong(song);

        changeActiveSong(songs, song, setSongs);
        playNewAudio(playing, audioRef);
    }
    return (
        <div className={`libsong-container ${song.active ? 'active' : ''}`} onClick={libSongHandler}>
            <img src={song.art} alt={`${song.name} cover`} />
            <div className="track-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibraryTrack;