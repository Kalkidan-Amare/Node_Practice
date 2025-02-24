const axios = require('axios');

const API_URL = 'https://api.github.com/users/';

async function getUser(username) {
  try {
    const response = await axios.get(API_URL + username);
    console.log("Fetched Data: ", response.data);

  } catch (error) {
    console.error('Error:', error);
  }
}

getUser('Kalkidan-Amare'); 
