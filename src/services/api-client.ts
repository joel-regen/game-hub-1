import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c43778e0646d4c22b84bd71bdb0db18c',
  },
});
