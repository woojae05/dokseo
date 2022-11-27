import axios from "axios";
import config from "../config/config.json";

const customAxios = axios.create({
    baseURL: config.SERVER,
    timeout: 1000,
});

export default customAxios;
