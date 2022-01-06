const getTimeLine = (block) => {
  const progressTime = block.querySelector('.progress-time');
  const progressLine = block.querySelector('.progress-line');
  const progressBlock = block.querySelector('.question-progress');

  return [progressTime, progressBlock, progressLine];
};

export default getTimeLine;
