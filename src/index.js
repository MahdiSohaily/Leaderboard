/* eslint-disable linebreak-style */
import './CSS/styles.css';

const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const existGame = () => (localStorage.getItem('game') ? JSON.parse(localStorage.getItem('game')) : false);
const setGame = () => {
    
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  if (existGame()) {
    console.log('defined');
  } else {
    setGame('LeaderBoard Game');
  }
});
