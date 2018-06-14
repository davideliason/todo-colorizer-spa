import React, { Input,Component} from 'react';

class Colorizer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: "",
			bgColor: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({
			color: e.target.value
		})
	}

	onSubmit(e) {
		this.setState({
			bgColor: this.state.color
		});
		e.preventDefault();
	}

	render() {
		var colorizerStyle = {
			backgroundColor: this.state.bgColor,
			width: 200,
			height: 200,
			color: this.state.color,
			padding: 50
		}
		return (
			    <div style={colorizerStyle}>
				   <p>This is Colorizer</p>

				   <form onSubmit={this.onSubmit}>
				   	<input 
				   	   onChange={this.onChange}
				   	   placeholder="new color"
				   	    />
				   	<button type="submit">go</button>
				   </form>
				</div>   
			);
	}
}

export default Colorizer;