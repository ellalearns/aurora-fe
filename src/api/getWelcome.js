import axios from "axios";
import { URL } from "./url";

const getWelcome = async () => {
    const {data} = await axios.get(`${URL}/welcome`, {
        withCredentials: true
    })
    return data;
};

export default getWelcome;
