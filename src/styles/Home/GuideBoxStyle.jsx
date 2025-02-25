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

	@media (max-width: 1240px) {
		width: 1000px;
	}

	@media (max-width: 1020px) {
		padding: 55px;
		gap: 5px;
		width: 800px;
		flex-direction: column;
	}

	@media (max-width: 815px) {
		width: 600px;
		height: 650px;
		gap: 20px;
	}

	@media (max-width: 620px) {
		width: 450px;
		height: 600px;
		padding: 55px 30px;
	}

	@media (max-width: 460px) {
		width: 350px;
		height: 500px;
		padding: 40px 25px;
		justify-content: center;
	}
`;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 46px;

	text-align: ${({ isLeft }) => (isLeft ? "right" : "left")};

	@media (max-width: 1020px) {
		flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};
		align-items: center;
		gap: 20px;
	}

	@media (max-width: 815px) {
		flex-direction: column;
		text-align: center;
		gap: 0;
	}

	@media (max-width: 460px) {
		gap: 10px;
	}
`;

export const Title = styled.p`
	color: #7e4b33;
	font-size: 32px;
	font-weight: 500;

	white-space: pre-wrap;

	@media (max-width: 1240px) {
		font-size: 28px;
	}

	@media (max-width: 1020px) {
		font-size: 32px;
	}

	@media (max-width: 620px) {
		font-size: 28px;
	}

	@media (max-width: 460px) {
		font-size: 23px;
	}
`;

export const Sub = styled.p`
	color: #a07b6a;
	font-size: 24px;
	font-weight: 500;

	white-space: pre-wrap;

	@media (max-width: 1240px) {
		font-size: 22px;
	}

	@media (max-width: 620px) {
		font-size: 18px;
	}

	@media (max-width: 460px) {
		font-size: 14px;
	}
`;

export const Image = styled.img`
	width: 320px;

	@media (max-width: 1240px) {
		width: 280px;
	}

	@media (max-width: 1020px) {
		width: 200px;
	}

	@media (max-width: 815px) {
		width: 300px;
	}

	@media (max-width: 460px) {
		width: 225px;
	}
`;
