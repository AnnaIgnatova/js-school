import { shuffle } from '../base-functions/index.js';
import { imagesBlock } from './constants/elements';
import createPics from './functions/createPics.js';
import createPicsArr from './functions/createPicsArr.js';
import choosePicAnswer from './functions/choosePicAnswer.js';
import addQuestionAnswers from './functions/addQuestionAnswers.js';

const renderPicQuestion = (index, end, cardIndex) => {
  let imgArr = [];
  const picIndex = Number(index);

  imgArr = createPics(picIndex);
  imagesBlock.innerHTML = '';

  const picElementsArr = createPicsArr(imgArr);
  const shuffledArr = shuffle(picElementsArr);

  shuffledArr.forEach((element) => {
    element.addEventListener('click', () => {
      choosePicAnswer(element, picIndex, cardIndex);
    });
  });

  addQuestionAnswers(shuffledArr);
};

export default renderPicQuestion;
