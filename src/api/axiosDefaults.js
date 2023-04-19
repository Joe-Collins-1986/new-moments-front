import axios from "axios";
const jwtToken = localStorage.getItem('jwtToken');
console.log(jwtToken)

axios.defaults.baseURL = "https://moments-photos.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export const axiosReq = axios.create();
export const axiosRes = axios.create();