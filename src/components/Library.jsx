import LibraryTrack from "./LibraryTrack";

const Library = ({songs, setCurrentSong, setPlaying, audioRef, playing, setSongs, libDisplay}) => {
    return(
        <div className={`library-container ${libDisplay ? 'display' : 'hide'}`}>
        <h2>Library</h2>
            {songs.map(song => <LibraryTrack songs={songs} song={song} setCurrentSong={setCurrentSong} setPlaying={setPlaying} audioRef={audioRef} playing={playing} setSongs={setSongs} key={song.id}/>)}
        </div>
    );
}

export default Library;