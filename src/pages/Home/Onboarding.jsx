import React from "react";
import * as O from "../../styles/Home/OnboardingStyle";

import brownLogo from "../../assets/images/brownLogo.png";

function Onboarding() {
	return (
		<O.Container>
			<O.Logo src={brownLogo} />
			<O.Footer>
				<O.FooterGuide>
					*모아북에 첨부되는 URL을 비롯한 모든 작성물 내용의 권리는
					작성자에게 있으며, 작성자의 동의 없는 무단 배포 및 사용은
					금지됩니다.
				</O.FooterGuide>
				<O.FooterTeam>@KDT_Cloud_Team</O.FooterTeam>
			</O.Footer>
		</O.Container>
	);
}

export default Onboarding;
