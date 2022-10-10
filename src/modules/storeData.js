import message from './showMessage';
const axios = require('axios').default;

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

const store = async (studentName = '', studentScore = 0, gameID) => {
  try {
    const response = await axios.post(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
      { user: studentName, score: studentScore }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export { setGame, store };
