import { setImage, showCard } from '../../base-functions';
import { artistQuestionPic } from '../constants/elements';

const showQuestionPic = (num) => {
  const url = `./images/full/${num}full.jpg`;

  setImage(url, artistQuestionPic);
  artistQuestionPic.style.opacity = 0;

  setTimeout(() => {
    showCard(artistQuestionPic);
  }, 300);
};

export default showQuestionPic;
