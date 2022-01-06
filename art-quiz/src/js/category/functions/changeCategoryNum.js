import { setImage } from '../../base-functions';
import { changeCategoryIndex } from '../../local-storage';

const changeCategoryNum = (i, currentCategory, index, cardImage) => {
  let categoryIndex = i;
  categoryIndex += 10;
  changeCategoryIndex(categoryIndex);
  setImage(`./images/${currentCategory}/${index}.jpg`, cardImage);
};

export default changeCategoryNum;
