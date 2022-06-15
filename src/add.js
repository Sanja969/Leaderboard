import createScoreElement from './UI.js';

const list = [];

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const add = (name, score) => {
  createScoreElement(name, score);
  const scoreData = new Scores(name, score);
  list.push(scoreData);
  localStorage.setItem('scores', JSON.stringify(list));
};

export { add, list, Scores };