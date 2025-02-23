import React from "react";
import * as O from "../../styles/Home/OnboardingStyle";

import brownLogo from "../../assets/images/brownLogo.png";
import introLaptop from "../../assets/images/introLaptop.png";
import kakaoLogin from "../../assets/images/kakaoLogin.png";

const introText =
	"모아북은 단순히 정보를 저장하는 것이 \n 아닌 저장 이후 모은 정보를 자신만의 것으로 \n 기록하는 사이트 입니다.";

const guideText = "모아북은 이런 분들이 사용하면 좋습니다!";

const loginText =
	"이 외에도 언제든 원하는 내용을 한번에 모아 보고 \n 수정하며 나만의 방식으로 정리할 수 있는 \n 모아북을 경험해보세요!";

const footerText =
	"*모아북에 첨부되는 URL을 비롯한 모든 작성물 내용의 권리는 작성자에게 있으며, 작성자의 동의 없는 무단 배포 및 사용은 금지됩니다.";

function Onboarding() {
	return (
		<O.Container>
			<O.Logo src={brownLogo} />
			<O.Intro>
				<O.IntroText>{introText}</O.IntroText>
				<O.IntroImg src={introLaptop} />
			</O.Intro>
			<O.Guide>
				<O.GuideText>{guideText}</O.GuideText>
			</O.Guide>
			<O.Login>
				<O.LoginText>{loginText}</O.LoginText>
				<O.KakaoLogin src={kakaoLogin} />
			</O.Login>
			<O.Footer>
				<O.FooterGuide>{footerText}</O.FooterGuide>
				<O.FooterTeam>@KDT_Cloud_Team</O.FooterTeam>
			</O.Footer>
		</O.Container>
	);
}

export default Onboarding;
