import { ReactNode, createContext } from "react";

type TValues = {
	todoTitle: string;
};

type TTodoProvider = {
	children: ReactNode;
};

export const TodoContext = createContext<TValues | undefined>(undefined);

const TodoProvider: React.FC<TTodoProvider> = ({ children }) => {
	const values: TValues = {
		todoTitle: "This is a todo title",
	};

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
