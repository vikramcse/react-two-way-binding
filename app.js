var DisplayContainerParant = React.createClass({
	updateVal: function(newVal) {
		this.setState({
			value: newVal
		});
	},
	getInitialState: function() {
		return {
			value: 'Initial Value'
		}
	},
	render: function() {
		return(
			<div>
				<h2>{this.state.value}</h2>
				<InputBox value={this.state.value} updateValueInPatent={this.updateVal}/>
			</div>
		);
	}
});


var InputBox = React.createClass({
	update: function() {
		var newVal = this.refs.inputValue.getDOMNode().value;
		this.props.updateValueInPatent(newVal);

	},
	render: function() {
		return (
			<input type="text" ref="inputValue" value={this.props.value} onChange={this.update}/>
		);
	}
});

ReactDOM.render(<DisplayContainerParant />, document.getElementById('content'));