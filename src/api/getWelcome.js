import axios from "axios";

const getWelcome = async () => {
    const {data} = await axios.get("http://127.0.0.1:5000/welcome")
    return data;
};

export default getWelcome;
