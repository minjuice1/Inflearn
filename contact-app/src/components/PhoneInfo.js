import React, { Component } from "react";

class PhoneInfo extends Component {
	handleRemove = () => {
		const { info, onRemove } = this.props;
		onRemove(info.id);
	};
	render() {
		const { name, phone } = this.props.info;
		const { onRemove } = this.props;
		console.log(onRemove);
		return (
			<div>
				<span>
					<b>{name}</b>
				</span>
				<span> {phone} </span>
				<button onClick={this.handleRemove}>삭제</button>
			</div>
		);
	}
}

export default PhoneInfo;
