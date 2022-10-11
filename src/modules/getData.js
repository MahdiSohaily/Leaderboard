import { message } from './showData.js';

const axios = require('axios').default;

/**
 * A function to get stored data
 * to an external API
 * @param {string} gameID
 * @returns
 */
const getData = async (gameID) => {
  let response = null;
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
