import axios from "axios";
import { URL } from "./url";

const createTask = async (payload) => {
    const { data } = await axios.patch(
        `${URL}/task/start`,
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
