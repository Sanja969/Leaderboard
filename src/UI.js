const scoreContainer = document.querySelector('.scores');

const createScoreElement = (name, score) => {
  const scoreElement = document.createElement('li');
  scoreElement.textContent = `${name}: ${score}`;
  scoreContainer.appendChild(scoreElement);
};

export default createScoreElement;