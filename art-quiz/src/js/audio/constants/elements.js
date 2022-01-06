const audioWin = document.createElement('audio');
const audioLose = document.createElement('audio');
const audioEnd = document.createElement('audio');

audioWin.src = './audio/win.mp3';
audioLose.src = './audio/lose.mp3';
audioEnd.src = './audio/end-game.mp3';

export { audioWin, audioLose, audioEnd };
