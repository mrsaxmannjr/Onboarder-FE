require('dotenv').config()

const API_URL = window.location.hostname == "localhost" ?
  "http://localhost:3000/api/v1/glinks/" :
  process.env.API_URL;

module.exports = API_URL;