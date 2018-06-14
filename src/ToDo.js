import React, {Component} from 'react';

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : []
		};
	}
	
	render() {
		var todoStyle = {
		backgroundColor : "deepskyblue",
		width: 200,
		height: 300,
		textAlign: "center"
	}
		return (
				<div style={todoStyle}>
				  <h5>ToDo</h5>
				</div>
			);
	}
}

export default ToDo;