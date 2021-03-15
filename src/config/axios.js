import axios from 'axios';
import https from 'https';


const instance = axios.create({
  /*httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),*/
  baseURL: 'http://nwc-backend-mockup-14march2021.herokuapp.com/',
});

export default instance;