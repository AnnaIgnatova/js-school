const toggleAudio = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setPlay: (play: boolean) => void,
  play: boolean
) => {
  const audio = document.querySelector(".audio") as HTMLAudioElement;
  (e.currentTarget as HTMLElement).classList.toggle("select-icon");
  if (!play) {
    audio.play();
    setPlay(true);
  } else {
    audio.pause();
    audio.currentTime = 0;
    setPlay(false);
  }
};

export default toggleAudio;
