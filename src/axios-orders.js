import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-8c915.firebaseio.com/",
});

export default instance;
