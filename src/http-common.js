import axios from 'axios';

const devBaseUrl = 'http://localhost:3010';
// Todo: Add production base url when deploy
const productionBaseUrl = 'HerokuSomething';
export default axios.create({
  baseURL: devBaseUrl,
});
