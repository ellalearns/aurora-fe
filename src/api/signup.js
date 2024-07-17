import axios from "axios";
import { URL } from "./url";

const signUp = async (payload) => {
    const { data } = await axios.post(
        `${URL}/auth/sign-up`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return data;
};

export default signUp;
