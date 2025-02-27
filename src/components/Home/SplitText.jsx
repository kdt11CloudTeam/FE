import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.05, duration: 0.5 },
	}),
};

const SplitText = ({ text }) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting); // ✅ GuideText가 100% 보이면 실행
			},
			{ threshold: 1.0 } // **100% 화면에 보여야 트리거됨**
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		<span
			ref={ref}
			style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
		>
			{text.split("").map((char, i) => (
				<motion.span
					key={i}
					custom={i}
					initial="hidden"
					animate={isVisible ? "visible" : "hidden"} // ✅ 100% 보일 때만 애니메이션
					variants={textVariants}
					style={{ display: "inline-block" }}
				>
					{char}
				</motion.span>
			))}
		</span>
	);
};

export default SplitText;
