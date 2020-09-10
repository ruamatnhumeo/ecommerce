import React from "react";
import "./UserList.scss";

function UserList(props) {
	const { users, onDeleteUser} = props;

	const handleDelete = (userId) => {
		if(!onDeleteUser) return;

		onDeleteUser(userId);
	}

	return (
		<div className="order-list">
			<div className="order-list__inner">
				<div className="order-list__title">
					<h6>User List</h6>
				</div>
				<div className="order-list__table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Email</th>
								<th>Admin</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr>
									<td>{user._id}</td>
									<td>{user.email}</td>
									<td>{user.isAdmin}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserList;
