import { showCard } from '../../base-functions';
import { imagesBlock } from '../constants/elements';

const addQuestionAnswers = (shuffledArr) => {
  shuffledArr.map((img, i) => {
    imagesBlock.append(img);
    setTimeout(() => {
      showCard(img);
    }, 300 * (i + 1));
    return img;
  });
};

export default addQuestionAnswers;
