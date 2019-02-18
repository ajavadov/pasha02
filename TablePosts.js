import React from "react";

const TablePosts = props => {
	return (
		<div className="ui segment">
			<h5 className="ui header">Posts are provided as below:</h5>
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{props.userposts.map(post => {
						return (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.body}</td>
							</tr>
							
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TablePosts;