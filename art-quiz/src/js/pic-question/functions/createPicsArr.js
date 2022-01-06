import { setImage } from '../../base-functions';
import { images } from '../../local-storage';

const createPicsArr = (imgArr) =>
  imgArr.map((img) => {
    const pic = document.createElement('div');
    pic.dataset.index = img.imageNum;
    pic.dataset.author = images[img.imageNum].author;
    pic.dataset.name = images[img.imageNum].name;
    pic.dataset.year = images[img.imageNum].year;
    pic.style.opacity = 0;
    pic.classList.add('pic-question-pic');
    setImage(img.imageURL, pic);
    return pic;
  });

export default createPicsArr;
