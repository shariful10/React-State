import React from "react";

type TCount = {
	count: number;
};

const ChildComponent: React.FC<TCount> = ({ count }) => {
	return (
		<div>
			<button className="text-white text-xl border rounded-md px-5 py-3.5 bg-purple-400">
				{count}
			</button>
		</div>
	);
};

export default ChildComponent;
