import { useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
	const context = useContext(TodoContext);

	if (!context) {
		throw new Error("TodoForm must be used within a TodoProvider");
	}

	const { state, dispatch } = context;

	return (
		<div>
			{state.map((item: TTodo) => (
				<p
					key={item.id}
					className={`cursor-pointer ${item.isCompleted && "line-through"}`}
					onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
				>
					{item.title}
				</p>
			))}
		</div>
	);
};

export default TodoList;
