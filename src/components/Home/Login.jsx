import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const CLIENT_SECRET = import.meta.env.VITE_KAKAO_CLIENT_SECRET;
const BASE_URL = import.meta.env.VITE_BACK_BASE_URL;

function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get("code");
		console.log("카카오 인가 코드:", code);

		if (!code) {
			console.error("인가 코드가 없습니다.");
			navigate("/");
			return;
		}

		const fetchTokenAndSendToBackend = async () => {
			try {
				// Access Token 요청
				const tokenResponse = await axios.post(
					"https://kauth.kakao.com/oauth/token",
					new URLSearchParams({
						grant_type: "authorization_code",
						client_id: KAKAO_CLIENT_ID,
						redirect_uri: REDIRECT_URI,
						code: code,
						client_secret: CLIENT_SECRET,
					}),
					{
						headers: {
							"Content-Type":
								"application/x-www-form-urlencoded;charset=utf-8",
						},
					}
				);

				if (!tokenResponse.data || !tokenResponse.data.access_token) {
					console.error("Access Token을 받을 수 없습니다.");
					return;
				}

				const accessToken = tokenResponse.data.access_token;

				// Access Token 전달
				const backendResponse = await axios.post(
					`${BASE_URL}/api/login/kakao`,
					{ accessToken },
					{ headers: { "Content-Type": "application/json" } }
				);

				//  '/groups' 페이지로 이동
				navigate("/groups");
			} catch (error) {
				console.error("로그인 실패:", error.response?.data || error);
				navigate("/");
			}
		};

		fetchTokenAndSendToBackend();
	}, [navigate]);

	return <></>;
}

export default Login;
