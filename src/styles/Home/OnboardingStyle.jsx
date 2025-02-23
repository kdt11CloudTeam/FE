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

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 70px;

	margin-top: auto;
	padding: 20px 0;

	width: 100%;

	background: #a5735d;
`;

export const FooterGuide = styled.p`
	color: #fff;
	text-align: center;
	font-size: 16px;
`;

export const FooterTeam = styled.p`
	color: #fff;
	text-align: center;
	font-size: 20px;
`;
