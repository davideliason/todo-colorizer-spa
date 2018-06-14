import React, {Component} from 'react';

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
			 </div>
			);
	}
}

export default TodoList;