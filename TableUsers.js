import React from "react";

const TableUsers = props => {
	return (
		<div className="ui segment">
			<h5 className="ui header">Users table is as below</h5>
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>E-mail</th>
						<th>Phone</th>
						
					</tr>
				</thead>
				<tbody>
					{props.user.map(user=> {
						return (
							<tr key={user.id}>
								<td data-label="Name">{user.name}</td>
								<td data-label="Surname">{user.username}</td>
								<td data-label="E-mail">{user.email}</td>
								<td data-label="Phone">{user.phone}</td>
								
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableUsers;