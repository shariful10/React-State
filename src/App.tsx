import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";

const App = () => {
	return (
		<TodoProvider>
			<div className="container mx-auto mt-10">
				<TodoForm />
			</div>
		</TodoProvider>
	);
};

export default App;
