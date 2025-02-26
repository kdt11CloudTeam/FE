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
			console.error("인가 코드가 없습니다. 로그인 페이지로 이동합니다.");
			navigate("/");
			return;
		}

		const fetchTokenAndSendToBackend = async () => {
			try {
				console.log("카카오 Access Token 요청");

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

				console.log("카카오 Access Token 응답:", tokenResponse.data);

				const accessToken = tokenResponse.data.access_token;
				if (!accessToken) {
					console.error("Access Token을 받을 수 없습니다.");
					return;
				}

				localStorage.setItem("accessToken", accessToken);

				console.log("백엔드로 Access Token 전송");

				const backendResponse = await axios.post(
					`${BASE_URL}/api/login/kakao`,
					{ accessToken },
					{ headers: { "Content-Type": "application/json" } }
				);

				console.log("백엔드 응답:", backendResponse.data);

				const userData = backendResponse.data.data;
				if (userData) {
					localStorage.setItem(
						"jwtToken",
						userData.jwtToken.accessToken
					);
					localStorage.setItem("name", userData.name);
					localStorage.setItem("email", userData.email);
					localStorage.setItem(
						"profile_image_url",
						userData.profile_image_url
					);
					console.log("사용자 정보 저장 완료");
				} else {
					console.warn("사용자 정보 저장 실패");
				}

				// 성공 시 '/groups' 페이지로 이동
				navigate("/groups");
			} catch (error) {
				console.error("로그인 실패:");
				if (error.response) {
					console.error("서버 응답 코드:", error.response.status);
					console.error("서버 응답 데이터:", error.response.data);
				} else {
					console.error("네트워크 오류, 요청 실패:", error.message);
				}
				navigate("/");
			}
		};

		fetchTokenAndSendToBackend();
	}, [navigate]);

	return <></>;
}

export default Login;
