const axios = require('axios').default;
const getData = async (gameID) => {
  try {
    const response = await axios.get(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getData };
