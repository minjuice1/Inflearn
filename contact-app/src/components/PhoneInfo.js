import React, { Component } from "react";

class PhoneInfo extends Component {
	state = {
		editing: false,
		name: "",
		phone: "",
	};

	handleRemove = () => {
		const { info, onRemove } = this.props;
		onRemove(info.id);
	};

	handleDataEdit = () => {
		// true -> false : onUpdate에 수정된 데이터 넣어주기
		// false -> true : state에 수정된 info 값을 렌더해주기
		const { info, onUpdate } = this.props;
		if (this.state.editing) {
			onUpdate(info.id, {
				name: this.state.name,
				phone: this.state.phone,
			});
		} else {
			this.setState({
				name: info.name,
				phone: info.phone,
			});
		}
		this.setState({
			editing: !this.state.editing,
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { name, phone } = this.props.info;
		const { editing } = this.state;

		return (
			<div>
				{editing ? (
					<>
						<input
							onChange={this.handleChange}
							value={this.state.name}
							name="name"
						/>
						<input
							onChange={this.handleChange}
							value={this.state.phone}
							name="phone"
						/>
					</>
				) : (
					<>
						<span>
							<b>{name}</b>
						</span>
						<span> {phone} </span>
					</>
				)}
				<button onClick={this.handleRemove}>삭제</button>
				<button onClick={this.handleDataEdit}>
					{editing ? "적용" : "수정"}
				</button>
			</div>
		);
	}
}

export default PhoneInfo;
