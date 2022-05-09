import axios from 'axios';

const devBaseUrl = 'http://localhost:3010';
const productionBaseUrl = 'http://rmiteyesbackend-env.eba-9bqmwkkv.us-west-2.elasticbeanstalk.com/';
// Todo: Add production base url when deploy
export default axios.create({
  baseURL: devBaseUrl,
});
