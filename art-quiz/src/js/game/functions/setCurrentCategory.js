import { PICTURE_CATEGORY } from '../../category/constants/card-classes';
import { changeCurrentBlock, getCurrentCategory } from '../../local-storage';
import { artistQuestion, picQuestion } from '../../main-blocks';

const setCurrentCategory = () => {
  const currentCategory = getCurrentCategory();

  if (currentCategory === PICTURE_CATEGORY) changeCurrentBlock(picQuestion);
  else changeCurrentBlock(artistQuestion);

  return currentCategory;
};

export default setCurrentCategory;
