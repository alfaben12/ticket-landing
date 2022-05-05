import axios from "axios";

// configuration
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
