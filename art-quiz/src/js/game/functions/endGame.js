import { addAnimationShow } from '../../base-functions';
import { modalEndGame } from '../../category/constants/elements';

const endGame = (rightAnswers) => {
  addAnimationShow(modalEndGame);
  modalEndGame.querySelector('.points').textContent = `${rightAnswers}/10`;
};

export default endGame;
