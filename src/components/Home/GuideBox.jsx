import React, { useState, useEffect } from "react";
import * as G from "../../styles/Home/GuideBoxStyle";

import tripImage from "../../assets/images/guideTrip.png";
import poemImage from "../../assets/images/guidePoem.png";
import gameImage from "../../assets/images/guideGame.png";

const GUIDE_DATA = [
	{
		title: "여행 전 가이드라인을 미리 만들고 싶은 분!",
		sub: "외국 여행 그룹을 생성해 여행 장소에 대한\n문화, 숙박, 관광 등의 꿀팁을 정리하고\n리마인드용 알람을 사전에 설정하여\n소중하고 완벽한 여행을 경험하세요!",
		imageSrc: tripImage,
	},
	{
		title: "인상 깊거나 좋은 글귀를 모으고 싶은 분!",
		sub: "좋은 시집 그룹을 생성해 시나 글을\n다양한 테마별로 정리하여 간직하거나\n소중한 사람들에게 보내 마음을 전해보세요!",
		imageSrc: poemImage,
	},
	{
		title: "게임 공략이나 스토리를 정리하고 싶은 분!",
		sub: "다양한 게임 그룹을 생성해 스토리와 정보를\n순서나 시리즈별로 정리하여 사람들과\n공유하고 잊지못할 특별한 추억을 저장해보세요!",
		imageSrc: gameImage,
	},
	{},
	{
		title: "여행 전 가이드라인을\n미리 만들고 싶은 분!",
		sub: "외국 여행 그룹을 생성해 여행 장소에 대한\n문화, 숙박, 관광 등의 꿀팁을 정리하고\n리마인드용 알람을 사전에 설정하여\n소중하고 완벽한 여행을 경험하세요!",
		imageSrc: tripImage,
	},
	{
		title: "인상 깊거나 좋은 글귀를\n모으고 싶은 분!",
		sub: "좋은 시집 그룹을 생성해 시나 글을\n다양한 테마별로 정리하여 간직하거나\n소중한 사람들에게 보내 마음을 전해보세요!",
		imageSrc: poemImage,
	},
	{
		title: "게임 공략이나 스토리를\n정리하고 싶은 분!",
		sub: "다양한 게임 그룹을 생성해 스토리와 정보를\n순서나 시리즈별로 정리하여 사람들과\n공유하고 잊지못할 특별한 추억을 저장해보세요!",
		imageSrc: gameImage,
	},
];

function GuideBox({ index }) {
	const guide = GUIDE_DATA[index] || { title: "", sub: "", imageSrc: "" };
	const [isChange, setIsChange] = useState(window.innerWidth > 1020);

	useEffect(() => {
		const handleResize = () => setIsChange(window.innerWidth > 1020);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			{isChange ? (
				<G.Container $isReverse={index % 2 !== 0}>
					<G.SubContainer $isLeft={index % 2 !== 0}>
						<G.Title>{guide.title}</G.Title>
						<G.Sub>{guide.sub}</G.Sub>
					</G.SubContainer>
					<G.Image src={guide.imageSrc} alt={guide.title} />
				</G.Container>
			) : (
				<G.Container $isReverse={index % 2 !== 0}>
					<G.Title>{guide.title}</G.Title>
					<G.SubContainer $isLeft={index % 2 !== 0}>
						<G.Sub>{guide.sub}</G.Sub>
						<G.Image src={guide.imageSrc} alt={guide.title} />
					</G.SubContainer>
				</G.Container>
			)}
		</>
	);
}

export default GuideBox;
