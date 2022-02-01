import React, { Component } from "react";

class PhoneInfo extends Component {
	render() {
		const { name, phone, id } = this.props.info;
		return (
			<div>
				<div>
					<b>{name}</b>
				</div>
				<div>{phone}</div>
			</div>
		);
	}
}

export default PhoneInfo;
