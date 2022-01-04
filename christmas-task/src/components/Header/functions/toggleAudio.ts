const toggleAudio = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setPlay: (play: boolean) => void,
  play: boolean
) => {
  const audio = document.querySelector(".audio") as HTMLAudioElement;
  (e.currentTarget as HTMLElement).classList.toggle("select-icon");
  if (!play) {
    audio.play();
    setPlay(!play);
  } else {
    audio.pause();
    audio.currentTime = 0;
    setPlay(play);
  }
};

export default toggleAudio;
