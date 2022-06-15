import createScoreElement from './UI.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a2mBZfWwwu4H12twjEJs/scores';

const postData = async (form) => {
  const formData = new FormData(form);
  const formDataSer = Object.fromEntries(formData);
  const jsonObj = { ...formDataSer, score: Number(formDataSer.score) };

  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(jsonObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

const getData = async () => {
  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const userData = await response.json();
  return userData.result;
};

const showUsersScore = () => {
  getData().then((data) => {
    data.forEach((user) => {
      createScoreElement(user.user, user.score);
    });
  });
};

export { postData, showUsersScore };