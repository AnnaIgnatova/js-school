const createPics = (picIndex) => {
  const imgArr = [];
  let imageNum = Number(picIndex);
  const idArr = [Number(imageNum)];

  let imageURL = `./images/full/${picIndex}full.jpg`;
  imgArr.push({ imageNum, imageURL });

  for (let i = 1; i < 4; i++) {
    imageNum = Math.floor(Math.random() * (241 - 0) + 0);
    imageURL = `./images/full/${imageNum}full.jpg`;
    while (idArr.indexOf(Number(imageNum)) !== -1) {
      imageNum = Math.floor(Math.random() * (241 - 0) + 0);
      imageURL = `./images/full/${imageNum}full.jpg`;
    }
    imgArr.push({ imageNum, imageURL });
    idArr.push(imageNum);
  }

  return imgArr;
};

export default createPics;
