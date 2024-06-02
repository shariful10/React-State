type TCount = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent: React.FC<TCount> = ({ setCount }) => {
	return (
		<div>
			<button
				onClick={() => setCount((prev) => prev + 1)}
				className="text-white text-xl border rounded-md px-5 py-3.5 bg-purple-400"
			>
				Click for Update
			</button>
		</div>
	);
};

export default CounterWithFuncComponent;
