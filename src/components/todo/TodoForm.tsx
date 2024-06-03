import { ChangeEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
	const [task, setTask] = useState("");
	const context = useContext(TodoContext);

	if (!context) {
		throw new Error("TodoForm must be used within a TodoProvider");
	}

	const { state, dispatch } = context;
	console.log("🚀 ~ file: todoForm.tsx:6 ~ TodoForm ~ state:", state);

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const todo = {
			id: Math.random().toString(36).substring(2, 35),
			title: task,
			isCompleted: false,
		};

		dispatch({ type: "addTodo", payload: todo });
		e.target.reset();
	};

	return (
		<div>
			<h1 className="">Add Todo</h1>
			<form onSubmit={handleSubmit} className="mt-10">
				<div className="flex flex-col mb-4">
					<label htmlFor="Todo">Task</label>
					<input
						type="text"
						name="todo"
						id="todo"
						placeholder="Todo"
						onBlur={(e) => setTask(e.target.value)}
						className="w-[300px] py-2 pl-3 border-[1.8px] border-gray-500 focus:outline-none rounded-md mt-2"
					/>
				</div>
				<button
					type="submit"
					className="bg-fuchsia-400 py-2 px-5 rounded-md text-white font-medium cursor-pointer"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
