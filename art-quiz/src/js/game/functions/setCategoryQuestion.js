import renderArtistQuestion from '../../artist-question';
import { transitionHideBlocks } from '../../base-functions';
import { PICTURE_CATEGORY } from '../../category/constants/card-classes';
import { images } from '../../local-storage';
import { artistQuestion, categories, picQuestion } from '../../main-blocks';
import renderPicQuestion from '../../pic-question';

const setCategoryQuestion = (
  currentCategory,
  currentQuestion,
  end,
  start,
  card
) => {
  let questionText;
  if (currentCategory === PICTURE_CATEGORY) {
    transitionHideBlocks(categories, picQuestion);
    questionText = document.querySelector('.pic-question-text');
    questionText.textContent = `What is ${images[start].author} picture`;
    renderPicQuestion(currentQuestion, end, card.dataset.index);
  } else {
    transitionHideBlocks(categories, artistQuestion);
    renderArtistQuestion(currentQuestion, end, card.dataset.index);
  }

  return questionText;
};

export default setCategoryQuestion;
