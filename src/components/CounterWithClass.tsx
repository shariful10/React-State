import React from "react";

type TCount = {
	count: number;
};

class CounterWithClass extends React.Component<NonNullable<unknown>, TCount> {
	constructor() {
		super();

		this.state = {
			count: 0,
		};
	}

	render() {
		const { count } = this.state;
		return (
			<button
				onClick={() => this.setState({ count: count + 1 })}
				className="text-white text-xl border rounded-md px-5 py-3.5 bg-purple-400"
			>
				{count}
			</button>
		);
	}
}

export default CounterWithClass;
