import { message } from './showData.js';

const axios = require('axios').default;

const getData = async (gameID) => {
  let response;
  try {
    response = await axios.get(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    );
    return response;
  } catch (error) {
    message(error);
  }
  return response;
};

export default getData;
