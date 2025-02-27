import axios from "axios";

const formattedURL = `${import.meta.env.VITE_BACK_BASE_URL}`;

const axiosInstance = axios.create({
    baseURL: formattedURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 요청 인터셉터 설정: 모든 요청에 Authorization header 추가
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwtToken"); // JWT 토큰 가져오기
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Bearer 추가
        } else {
            console.warn("🚨 토큰이 없습니다. 로그인 상태를 확인하세요.");
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
