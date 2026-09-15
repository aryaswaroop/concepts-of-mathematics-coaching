import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCourses = async () => {
    const response = await api.get("/courses");
    return response.data;
};

export const getBatches = async () => {
    const response = await api.get("/batches");
    return response.data;
};

export const getAnnouncements = async () => {
    const response = await api.get("/announcements");
    return response.data;
};

export const getTests = async () => {
    const response = await api.get("/tests");
    return response.data;
};

export default api;