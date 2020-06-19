/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const Alaajo =axios.create({
    baseURL: "https://alaajo-frontend.herokuapp.com"+'/api'
});

export default Alaajo
