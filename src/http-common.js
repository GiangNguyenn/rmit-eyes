import axios from 'axios';

const devBaseUrl = 'http://localhost:3002';
// Todo: Add production base url when deploy
const productionBaseUrl = 'HerokuSomething';
export default axios.create({
  baseURL: devBaseUrl,
});
