
export const changeActiveSong = (songs, currentSong, setSongs) => {
    //Change active song
    setSongs(songs.map(s => {
        if (s.id === currentSong.id) return { ...s, active: true };
        else return { ...s, active: false };
    }));
}

export const playNewAudio = (playing, audioRef) => {
    if (playing) {
        //Only plays the audio after loading it up from external source
        audioRef.current.play();
    }
}