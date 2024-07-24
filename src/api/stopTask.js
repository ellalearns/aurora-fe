import axios from "axios";
import { URL } from "./url";

const stopTask = async (payload) => {
    const { data } = axios.patch(
        `${URL}/task/stop`,
        payload,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}

export default stopTask;
