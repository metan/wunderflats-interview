import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
	const headerRef = useRef(null);

	useEffect(() => {
		const headerEl = headerRef.current;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 0;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) {
				headerEl.classList.remove(scrollUp);
				return;
			}
			if (currentScroll > lastScroll && !headerEl.classList.contains(scrollDown)) {
				headerEl.classList.remove(scrollUp);
				headerEl.classList.add(scrollDown);
			} else if (
				currentScroll < lastScroll &&
				headerEl.classList.contains(scrollDown)
			) {
				headerEl.classList.remove(scrollDown);
				headerEl.classList.add(scrollUp);
			}
			lastScroll = currentScroll;
		});
	})
	
	return (
		<div ref={headerRef} className="main-header">
			<div className="main-header__logo">
				<img src="./logo.png" alt="" />
			</div>
			<div className="user-menu">
				<button onClick={() => {}}>J</button>
			</div>
		</div>
	);
};

export default Header;
