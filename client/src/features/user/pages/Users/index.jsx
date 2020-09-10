import React, { useEffect, useState } from "react";
import "./Orders.scss";
import UserList from "../../components/UserList";
import userApi from "../../../../flux/api/userApi";

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await userApi.getUsers();
				const responseJSON = await response.json();
				setUsers(responseJSON);
			} catch (error) {
				console.log(error.message);
			}
		}

		fetchUsers();
	}, []);

	const handleDeleteUser = (userId) => {
		userApi.deleteUser(userId);
	};
	
	return (
		<div className="users">
			<UserList users={users} onDelete={handleDeleteUser}/>
		</div>
	);
}

export default Users;
