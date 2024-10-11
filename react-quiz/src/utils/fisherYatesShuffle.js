const fisherYatesShuffle = (array) => {
  let indexCurrent = array.length - 1;

  while (indexCurrent >= 0) {
    let indexRandom = Math.floor(Math.random() * indexCurrent);
    [array[indexCurrent], array[indexRandom]] = [
      array[indexRandom],
      array[indexCurrent],
    ];
    indexCurrent--;
  }

  return array;
};

export default fisherYatesShuffle;
