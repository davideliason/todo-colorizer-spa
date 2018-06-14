import React, {Component} from 'react';

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : [],
			todo : "blue"
		};
	this.updateTodo = this.updateTodo.bind(this);
	}

	updateTodo(e) {
		this.setState({
			todo: e.target.value
		})
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
				  <p>{this.state.todo}</p>
				  <form>
				  	<input type="text"
				  	  	   value={this.state.todo}
				  	       onChange={this.updateTodo}
				  		   placeholder="add todo"
				  	/>
				  </form>
				</div>
			);
	}
}

export default ToDo;