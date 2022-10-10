/* eslint-disable linebreak-style */
import './CSS/styles.css';
import { setGame, store } from './modules/storeData.js';
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const gameID = (() => localStorage.getItem('game'))();

/**
 * an event listener to listen for the form submission.
 * @parameter_one the type of event.
 * @parameter_two the callback function.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  if (gameID) {
    store(name, score, gameID);
  } else {
    setGame('LeaderBoard Game').then(() => {
      store(name, score, gameID);
    });
  }
  nameInput.value = null;
  scoreInput.value = null;
});
