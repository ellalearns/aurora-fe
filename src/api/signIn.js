import axios from "axios";
import { URL } from "./url";

const signIn = async (payload) => {
    const { data } = await axios.post(
        `${URL}/auth/sign-in`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return data;
};

export default signIn;
