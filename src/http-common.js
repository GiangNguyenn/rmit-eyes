import axios from 'axios';

const devBaseUrl = 'http://rmiteyesbackend-env.eba-9bqmwkkv.us-west-2.elasticbeanstalk.com/';
// Todo: Add production base url when deploy
const productionBaseUrl = 'HerokuSomething';
export default axios.create({
  baseURL: devBaseUrl,
});
