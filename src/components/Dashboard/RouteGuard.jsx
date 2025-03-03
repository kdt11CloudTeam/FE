import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ children }) => {
    const isAuthenticated = localStorage.getItem("jwtToken"); // 토큰 있는지 확인해서 로그인 여부 확인
    // const isAuthenticated = true; // TODO: 페이지 확인 용으로 임시로 true로 설정 (추후 수정 필요)
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RouteGuard;
