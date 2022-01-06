import { images } from '../../local-storage';

const renderQuestions = (num) => {
  const artArr = [];
  let artistNum = num;
  let artist = images[artistNum].author;
  const idArr = [Number(artistNum)];
  artArr.push({ artist, artistNum });

  for (let i = 1; i < 4; i++) {
    artistNum = Math.floor(Math.random() * (241 - 0) + 0);
    artist = images[artistNum].author;

    while (idArr.indexOf(artistNum) !== -1) {
      artist = images[artistNum].author;
      artistNum = Math.floor(Math.random() * (241 - 0) + 0);
    }
    artArr.push({ artist, artistNum });
    idArr.push(Number(artistNum));
  }

  return artArr;
};

export default renderQuestions;
