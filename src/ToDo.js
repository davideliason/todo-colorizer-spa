import React, {Component} from 'react';
import "./Todo.css";
class TodoItems extends React.Component {
	createTasks(item) {
		return <li key={item.key}>{item.text}</li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		console.log(listItems);
		return (
				<ul className="listed_todos">
					{listItems}
				</ul>
			);
	}
}

class TodoList extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {
			items: []
			};

		this.addItem = this.addItem.bind(this);
		}
    addItem(e) {
	  if (this._inputElement.value !== "") {
	    var newItem = {
	      text: this._inputElement.value,
	      key: Date.now()
	    };
	 
	    this.setState((prevState) => {
	      return { 
	        items: prevState.items.concat(newItem) 
	      };
	    });
	   
	    this._inputElement.value = "";
	  }
   
 	    e.preventDefault();
    }

	render() {
		var mainTodoList = {
			width: 200,
			height: 300,
			backgroundColor: "green"
		}
		return (
			 <div style={mainTodoList}>
			   <div className="header">
			   	 <form onSubmit={this.addItem}>
			   	 	<input 
			   	 		placeholder="add todo"
			   	 		ref={
			   	 			(a) => this._inputElement = a
			   	 		}>
			   	 	</input>
			   	 	<button type="submit">add</button>
			   	 </form>
			   </div>
			   <TodoItems entries={this.state.items}/>
			 </div>
			);
	}
}

export default TodoList;