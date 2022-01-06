import { gameInfo } from '../../local-storage';

const getRightAnswers = (currentCategory, index) => {
  let rightAnswers = 0;
  gameInfo[currentCategory][index - 1].forEach((item) => {
    if (item) rightAnswers++;
  });
  return rightAnswers;
};

export default getRightAnswers;
