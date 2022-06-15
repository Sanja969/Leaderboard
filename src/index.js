import './style.css';
import { add, list, Scores } from './add.js';
import createScoreElement from './UI.js';

const storage = JSON.parse(localStorage.getItem('scores')) || [];
const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('#refresh');

storage.forEach((item) => {
  const scoreData = new Scores(item.name, item.score);
  list.push(scoreData);
  createScoreElement(scoreData.name, scoreData.score);
});

submitBtn.addEventListener('click', () => {
  add(nameInput.value, scoreInput.value);
});

refresh.addEventListener('click', () => {
  document.location.href = './index.html';
});