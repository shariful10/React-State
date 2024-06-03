import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
	return (
		<TodoProvider>
			<div className="container mx-auto mt-10">
				<TodoForm />
				<TodoList />
			</div>
		</TodoProvider>
	);
};

export default App;
