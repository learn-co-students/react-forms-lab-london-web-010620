import React from 'react';

class LoginForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};
	}
	handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value
		});
	};
	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value
		});
	};
	handleLogin = (event) => {
		event.preventDefault();
		if (this.state.username && this.state.password) {
			this.props.handleLogin();
		}
	};
	render() {
		return (
			<form onSubmit={(e) => this.handleLogin(e)}>
				<div>
					<label>
						Username
						<input
							id="username"
							name="username"
							type="text"
							value={this.state.username}
							onChange={(e) => {
								this.handleUsernameChange(e);
							}}
						/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							id="password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={(e) => this.handlePasswordChange(e)}
						/>
					</label>
				</div>
				<div>
					<button type="submit">Log in</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;
