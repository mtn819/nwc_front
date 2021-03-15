import axios from 'axios';
import https from 'https';


const instance = axios.create({
  /*httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),*/
  baseURL: 'http://localhost:1337/',
});

export default instance;