import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
	const { state, dispatch } = useContext(TodoContext);

	return <div>todoTitle</div>;
};

export default TodoForm;
