import { ReactNode, createContext, useReducer } from "react";

type TTodoProvider = {
	children: ReactNode;
};

export type TTodo = {
	id: string;
	title: string;
	isCompleted: boolean;
};

type TAction = {
	type: "addTodo" | "taskComplete";
	payload: TTodo | string;
};

const typeConstance = {
	ADD_TODO: "addTodo",
	TASK_COMPLETE: "taskComplete",
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction): TTodo[] => {
	switch (action.type) {
		case typeConstance.ADD_TODO:
			return [...currentState, action.payload as TTodo];

		case typeConstance.TASK_COMPLETE:
			return currentState.map((item) =>
				item.id === action.payload
					? { ...item, isCompleted: !item.isCompleted }
					: item
			);

		default:
			return currentState;
	}
};

export const TodoContext = createContext<
	{ state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

const TodoProvider: React.FC<TTodoProvider> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const values = {
		state,
		dispatch,
	};

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
