import React, {Component} from 'react';

class TodoList extends React.Component {
	render() {
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