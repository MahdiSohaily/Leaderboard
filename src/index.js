/* eslint-disable linebreak-style */
import './CSS/styles.css';
const axios = require('axios').default;
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const gameID = (() => localStorage.getItem('game'))();

const setGame = async (name = 'leaderBoard') => {
  try {
    const response = await axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
      { name: name }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const message = (message = 'Data Inserted successfully.') => {
  console.log(message);
};

const store = async (studentName = '', studentScore = 0, gameID) => {
  try {
    const response = await axios.post(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
      { user: studentName, score: studentScore }
    );
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  if (gameID) {
    console.log('defined');
  } else {
    setGame('LeaderBoard Game').then(() => {
      store(name, score, gameID);
    });
  }
});
