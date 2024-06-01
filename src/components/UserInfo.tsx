import { useState } from "react";

type TUser = {
	name?: string;
	age?: number;
	hobbies?: string[];
};

const UserInfo = () => {
	const [user, setUser] = useState<TUser>({ name: "", age: 0, hobbies: [] });
	console.log(user);

	return (
		<form>
			<input
				onChange={(e) => setUser({ ...user, name: e.target.value })}
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				className="border rounded-md p-2 mr-5"
			/>
			<input
				onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
				type="number"
				name="age"
				id="age"
				placeholder="Age"
				className="border rounded-md p-2 mr-5"
			/>
			<input
				onBlur={(e) =>
					setUser({
						...user,
						hobbies: [...(user.hobbies || []), e.target.value],
					})
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

export default UserInfo;
