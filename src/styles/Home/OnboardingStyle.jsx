import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	max-width: 100%; /* 부모보다 커지지 않도록 설정 */
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background: linear-gradient(180deg, #fff 0%, #bb927f 100%);
`;

export const Logo = styled.img`
	margin-top: 40px;
	width: 194.5px;
	height: 50px;

	@media (max-width: 620px) {
		margin-top: 25px;
		width: 170px;
		height: 44px;
	}
`;

export const Intro = styled.div`
	display: flex;
	align-items: center;
	gap: 68px;

	margin-top: 108px;

	@media (max-width: 1520px) {
		flex-direction: column-reverse;
		gap: 0;
	}

	@media (max-width: 620px) {
		font-size: 22px;
		margin-top: 50px;
	}
`;

export const IntroText = styled.p`
	color: #a07b6a;
	text-align: center;
	font-size: 32px;

	white-space: pre-wrap;

	@media (max-width: 815px) {
		font-size: 28px;
	}

	@media (max-width: 620px) {
		font-size: 22px;
	}

	@media (max-width: 460px) {
		font-size: 18px;
	}
`;

export const IntroImg = styled.img`
	width: 910px;

	@media (max-width: 1720px) {
		width: 800px;
	}

	@media (max-width: 815px) {
		width: 700px;
	}

	@media (max-width: 620px) {
		width: 500px;
	}

	@media (max-width: 460px) {
		width: 400px;
	}
`;

export const Guide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 160px;

	margin: 318px 0 480px 0;

	@media (max-width: 620px) {
		margin: 200px 0 300px 0;
		gap: 80px;
	}
`;

export const GuideText = styled.p`
	color: #a07b6a;
	text-align: center;
	font-size: 48px;

	white-space: pre-wrap;

	@media (max-width: 1020px) {
		font-size: 40px;
	}

	@media (max-width: 815px) {
		font-size: 35px;
	}

	@media (max-width: 815px) {
		font-size: 30px;
	}

	@media (max-width: 620px) {
		font-size: 25px;
	}

	@media (max-width: 460px) {
		font-size: 21px;
	}
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
	font-size: 32px;

	white-space: pre-wrap;

	@media (max-width: 815px) {
		font-size: 28px;
	}

	@media (max-width: 620px) {
		font-size: 21px;
	}

	@media (max-width: 460px) {
		font-size: 17px;
	}
`;

export const KakaoLogin = styled(motion.img)`
	width: 600px;
	cursor: pointer;

	@media (max-width: 620px) {
		width: 450px;
	}

	@media (max-width: 460px) {
		width: 350px;
	}
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 50px;

	margin-top: 170px;
	padding: 20px 0;

	width: 100%;

	background: #a5735d;
	white-space: pre-wrap;
`;

export const FooterGuide = styled.p`
	color: #fff;
	text-align: center;
	font-size: 16px;

	@media (max-width: 620px) {
		font-size: 11px;
	}

	@media (max-width: 460px) {
		font-size: 10px;
	}
`;

export const FooterTeam = styled.p`
	color: #fff;
	text-align: center;
	font-size: 20px;

	@media (max-width: 620px) {
		font-size: 15px;
	}
`;
