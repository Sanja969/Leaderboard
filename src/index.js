import './style.css';
import { postData, showUsersScore } from './API-data.js';

const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');
const scoreContainer = document.querySelector('.scores');

showUsersScore();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  postData(form);
  form.children[1].value = '';
  form.children[2].value = '';
});

refresh.addEventListener('click', () => {
  scoreContainer.innerHTML = '';
  showUsersScore();
});