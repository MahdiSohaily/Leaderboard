import { message, showData } from './showData';

/**
 * An async function to send a post request
 * to an external APL to create a game
 * for later use for storing students
 * scores and getting back stored data.
 * @parameter_one the name of the game we want.
 * it has a default value.
 */
const axios = require('axios').default;

const setGame = async (name = 'leaderBoard') => {
  try {
    const response = await axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
      { name: name }
    );
    const gameID = response.data.result.split(' ')[3];
    localStorage.setItem('game', gameID);
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * An async function to send a post request
 * to an external APL to store a student score to the external API
 * @parameter_one the student name.
 * @parameter_two the student score.
 * @parameter_three our game unique ID.
 */
const store = async (studentName = '', studentScore = 0, gameID) => {
  try {
    const response = await axios.post(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
      { user: studentName, score: studentScore }
    );
    await message(response.data.result);
  } catch (error) {
    console.error(error);
  }
};

export { setGame, store };
