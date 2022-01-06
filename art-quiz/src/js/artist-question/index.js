import { artistQuestionBtns } from './constants/elements.js';
import showQuestionPic from './functions/showQstnPic.js';
import renderQuestions from './functions/renderQuestions.js';
import createQusetionBtns from './functions/createQusetionBtns.js';
import chooseAnswer from './functions/chooseAnswer.js';

const renderArtistQuestion = (index, end, cardIndex) => {
  let artArr = [];
  const questionNumber = Number(index);
  const artistNum = Number(index);

  showQuestionPic(artistNum);
  artArr = renderQuestions(artistNum);

  const shuffledArr = createQusetionBtns(artArr);

  shuffledArr.forEach((btn) => {
    btn.addEventListener('click', () => {
      chooseAnswer(btn, cardIndex, questionNumber);
    });
  });

  shuffledArr.forEach((btn) => artistQuestionBtns.append(btn));
};

export default renderArtistQuestion;
