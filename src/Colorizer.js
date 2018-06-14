import React, {Component} from 'react';

class Colorizer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: ""
		}
	}

	componentDidMount() {
		this.setState({
			color: "blue"
		})
	}
	render() {
		var colorizerStyle = {
			backgroundColor: this.state.color,
			width: 200,
			height: 200
		}
		return (
			    <div style={colorizerStyle}>
				   <p>This is Colorizer</p>
				</div>   
			);
	}
}

export default Colorizer;