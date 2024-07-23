import axios from "axios";
import { URL } from "./url";

const createTask = async (payload) => {
    const { data } = await axios.post(
        `${URL}/task/`,
        payload,
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }
    )
    return data;
}

export default createTask;
