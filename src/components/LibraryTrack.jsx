
const LibraryTrack = ({songs, song, setCurrentSong, setPlaying, audioRef, playing, setSongs}) => {
    const libSongHandler = () => {
        setCurrentSong(song);

        //Change active song
        setSongs(songs.map( s => {
            if (s.id === song.id) return {...s, active: true};
            else return {...s, active: false};
        }));

        if(playing){
            //Only plays the audio after loading it up from external source
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(()=>{
                    audioRef.current.play();
                })
            }
        }
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