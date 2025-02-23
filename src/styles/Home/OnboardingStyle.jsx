import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100vh;
	width: 100vw;
	max-width: 100%; /* 부모보다 커지지 않도록 설정 */

	background: linear-gradient(180deg, #fff 0%, #bb927f 100%);
`;

export const Logo = styled.img`
	margin-top: 40px;
	width: 194.5px;
	height: 50px;
`;

export const Intro = styled.div`
	display: flex;
	align-items: center;

	margin-top: 75px;
`;

export const IntroText = styled.p`
	color: #a07b6a;
	text-align: center;
	font-size: 22px;

	white-space: pre-wrap;
`;

export const IntroImg = styled.img`
	width: 650px;
`;

export const Guide = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 230px;
`;

export const GuideText = styled.p`
	color: #a07b6a;
	text-align: center;
	font-size: 34px;
`;

export const Login = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 140px;

	margin-top: auto;
`;

export const LoginText = styled.p`
	color: #fff;
	text-align: center;
	font-size: 22px;

	white-space: pre-wrap;
`;

export const KakaoLogin = styled.img`
	width: 430px;
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 50px;

	margin-top: 120px;
	padding: 20px 0;

	width: 100%;

	background: #a5735d;
`;

export const FooterGuide = styled.p`
	color: #fff;
	text-align: center;
	font-size: 11px;
`;

export const FooterTeam = styled.p`
	color: #fff;
	text-align: center;
	font-size: 14px;
`;
