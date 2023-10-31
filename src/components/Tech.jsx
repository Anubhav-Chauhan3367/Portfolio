import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./HoverCard.css";
import HoverCard from "./HoverCard";

const Tech = () => {
	const focusHandler = () => {
		console.log("focused");
	};

	return (
		<div className="flex flex-row flex-wrap justify-center gap-12">
			{technologies.map((technology) => (
				<div
					onFocus={focusHandler}
					className={`w-28 h-28 parent-component`}
					key={technology.name}
				>
					<BallCanvas icon={technology.icon} />
					<HoverCard title={technology.name} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
