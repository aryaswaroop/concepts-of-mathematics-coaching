import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token =
            localStorage.getItem("authToken");

        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// =====================================================
// API HEALTH
// =====================================================

export const getApiHealth = async () => {
    const response = await api.get("/health");

    return response.data;
};

export const loginUser = async (loginData) => {
    const response = await api.post(
        "/auth/login",
        loginData
    );

    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");

    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await api.post(
        "/auth/forgot-password",
        {
            email,
        }
    );

    return response.data;
};

export const resetPassword = async ({
    token,
    password,
}) => {
    const response = await api.post(
        "/auth/reset-password",
        {
            token,
            password,
        }
    );

    return response.data;
};

// =====================================================
// COURSES
// =====================================================

export const getCourses = async () => {
    const response = await api.get("/courses");

    return response.data;
};

// =====================================================
// BATCHES
// =====================================================

export const getBatches = async () => {
    const response = await api.get("/batches");

    return response.data;
};

// =====================================================
// ANNOUNCEMENTS
// =====================================================

export const getAnnouncements = async () => {
    const response = await api.get("/announcements");

    return response.data;
};

// =====================================================
// TESTS
// =====================================================

export const getTests = async () => {
    const response = await api.get("/tests");

    return response.data;
};

// =====================================================
// TEST RESULTS
// =====================================================

export const getTestResults = async () => {
    const response = await api.get("/test-results");
    return response.data;
};

// =====================================================
// REWARDS
// =====================================================

export const getRewards = async () => {
    const response = await api.get("/rewards");
    return response.data;
};

// =====================================================
// SUPPORT SESSIONS
// =====================================================

export const getSupportSessions = async () => {
    const response = await api.get("/support-sessions");
    return response.data;
};

//=====================================================
// ENQUIRIES
// =====================================================

export const createEnquiry = async (enquiryData) => {
    const response = await api.post("/enquiries", enquiryData);
    return response.data;
};

export default api;