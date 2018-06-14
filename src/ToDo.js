import React, {Component} from 'react';

class TodoList extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				todos: []
			}
		}
	render() {
		

		var mainTodoList = {
			width: 200,
			height: 300,
			backgroundColor: "yellow"
		}
		return (
			 <div className="mainTodoList">
			   <div className="header">
			   	 <form>
			   	 	<input placeholder="add todo">
			   	 	</input>
			   	 	<button type="submit">add</button>
			   	 </form>
			   </div>
			 </div>
			);
	}
}

export default TodoList;