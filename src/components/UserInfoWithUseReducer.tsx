import { ChangeEvent, useReducer } from "react";

type TAction =
	| { type: "addName"; payload: string }
	| { type: "addAge"; payload: number }
	| { type: "addHobbies"; payload: string };

const initialState = {
	name: "",
	age: 0,
	hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
	switch (action.type) {
		case "addName":
			return { ...currentState, name: action.payload };
		case "addAge":
			return { ...currentState, age: action.payload };
		case "addHobbies":
			return {
				...currentState,
				hobbies: [...currentState.hobbies, action.payload],
			};
		default:
			return currentState;
	}
};

const UserInfoWithUseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				className="border rounded-md p-2 mr-5"
			/>
			<input
				onChange={(e) =>
					dispatch({ type: "addAge", payload: Number(e.target.value) })
				}
				type="number"
				name="age"
				id="age"
				placeholder="Age"
				className="border rounded-md p-2 mr-5"
			/>
			<input
				onBlur={(e) =>
					dispatch({ type: "addHobbies", payload: e.target.value })
				}
				type="text"
				name="hobbies"
				id="hobbies"
				placeholder="Hobbies"
				className="border rounded-md p-2 mr-5"
			/>
			<input
				type="submit"
				value="Submit"
				className="bg-purple-400 text-white px-5 py-2 rounded-md"
			/>
		</form>
	);
};

export default UserInfoWithUseReducer;
