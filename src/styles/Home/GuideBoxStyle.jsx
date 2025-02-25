import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
	justify-content: space-between;
	align-items: center;

	width: 1200px;
	height: 360px;
	padding: 64px;

	border-radius: 36px;
	background: rgba(255, 255, 255, 0.6);
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	gap: 46px;

	text-align: ${({ isLeft }) => (isLeft ? "right" : "left")};
`;

export const Title = styled.p`
	color: #7e4b33;
	font-size: 32px;
	font-weight: 500;
`;

export const Sub = styled.p`
	color: #a07b6a;
	font-size: 24px;
	font-weight: 500;

	white-space: pre-wrap;
`;

export const Image = styled.img`
	width: 320px;
`;
