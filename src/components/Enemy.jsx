import React from "react"

export default function Enemy({top,left,transform,image}) {
	return (
		<div
			className="enemy"
			style={{
				top: `${top}px`,
				left: `${left}px`,
				transform: transform === "left" ? "scaleX(-1)" : null,
			}}
		>
			<img src={image} />
		</div>
	)
}
