import React from "react";
import "./HoverCard.css";

const HoverCard = (props) => {
	return (
		<div className="hover-card">
			<h4 className="text-white font-medium font-serif">{props.title}</h4>
		</div>
	);
};

export default HoverCard;
