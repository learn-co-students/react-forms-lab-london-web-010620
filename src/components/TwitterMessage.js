import React from 'react';

class TwitterMessage extends React.Component {
	state = {
		charsLeft: this.props.maxChars,
		inputValue: ''
	};

	handleInputChange(e) {
		this.setState({
			charsLeft: this.props.maxChars - e.target.value.length,
			inputValue: e.target.value
		});
	}

	render() {
		return (
			<div>
				<strong>Your message:</strong>
				<input
					onChange={(e) => this.handleInputChange(e)}
					type="text"
					name="message"
					id="message"
					value={this.state.inputValue}
				/>
				<span>Characters remaining: {this.state.charsLeft} </span>
			</div>
		);
	}
}

export default TwitterMessage;
