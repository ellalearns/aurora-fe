import axios from "axios";
import { URL } from "./url";

const startTask = async (payload) => {
    const { data } = await axios.post(
        `${URL}/track`,
        payload,
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }
    )
    return data;
}

export default startTask;
