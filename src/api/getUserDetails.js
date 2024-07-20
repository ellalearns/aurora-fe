import axios from "axios";
import { URL } from "./url";

const getUserDetails = async () => {
    const { data } = await axios.get(`${URL}/user`, {
        withCredentials: true
    })
    return data;
};

export default getUserDetails;
