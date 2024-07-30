import axios from "axios";
import { URL } from "./url";


const markTaskDone = async (payload) => {
    const { data } = await axios.patch(
        `${URL}/task/isdone`,
        payload,
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }
    )
    return data
}

export default markTaskDone
