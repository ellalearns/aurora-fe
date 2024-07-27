import axios from "axios";
import { URL } from "./url";

const getTarget = async () => {
    const { data } = await axios.get(
        `${URL}/target`,
        {
            withCredentials: true
        }
    )
    return data
}

export default getTarget;
