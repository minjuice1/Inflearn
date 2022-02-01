import React, { Component } from "react";

class PhoneForm extends Component {
	state = {
		name: "",
		phone: "",
	};
	d;

	// onchange로 state 값을 전달해줄때, input이 여러개라서 value로 받아지는 데이터가 겹친다면
	// this.setState 안에 원래는 객체 형식으로
	// name: e.target.value,
	// 이런식으로 넣었었는데, 그거 대신 event.target 안의 name 값을 가져온다.
	// **주의 : input마다 name값을 먼저 주고, 핸들러에 e.target.name을 추가해야 함.
	ChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	SubmitHandler = (e) => {
		// button을 누르면 렌더링 되는것을 막기 위해.
		e.preventDefault();

		// 부모 컴포넌트인 app으로부터 onCreate를 받아와서
		// this.state (name, phone)을 넣어준다.

		// this.props.onCreate({
		// 	name: this.state.name,
		// 	phone: this.state.phone,
		// });
		this.props.onCreate(this.state);
	};

	render() {
		return (
			<form onSubmit={this.SubmitHandler}>
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
				<button type="submit">등록하기</button>
				<div>
					{this.state.name} {this.state.phone}
				</div>
			</form>
		);
	}
}

export default PhoneForm;
