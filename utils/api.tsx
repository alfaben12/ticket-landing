import axios from "axios";

let persistStorageAuth = null;
if (typeof window !== "undefined") {
    const localStoragePersist = localStorage.getItem("ticket:auth");

    if (localStoragePersist !== null) {
        persistStorageAuth = JSON.parse(localStoragePersist)["data"]["token"];
    }
}

// configuration
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${persistStorageAuth}`,
    },
});

export default api;
