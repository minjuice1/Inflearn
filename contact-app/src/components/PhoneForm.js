import React, { Component } from "react";

class PhoneForm extends Component {
	state = {
		name: "",
		phone: "",
	};
	d;

	ChangeHandler = (e) => {
		console.log(e);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<form>
				<input
					name="name"
					placeholder="name"
					onChange={this.ChangeHandler}
					value={this.state.name}
				/>
				<input
					name="phone"
					placeholder="phoneNumber"
					onChange={this.ChangeHandler}
					value={this.state.phone}
				/>
				<div>
					{this.state.name} {this.state.phone}
				</div>
			</form>
		);
	}
}

export default PhoneForm;
