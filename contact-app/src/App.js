import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
	state = {
		info: [],
	};
	// react는 항상 불변성을 유지해주어야 하기 때문에,
	// 어떠한 값을 수정하려면 언제나 setState를 사용해주어야 하며,
	// 내부에 있는 배열이나 객체를 바꾸게 될 때는
	// 기존의 배열이나 객체를 수정하지 않고,
	// 그 것을 기반으로 새로운 객체 혹은 배열을 만들어서 값을 주입해주어야 함. (concat 사용)

	handleCreate = (data) => {
		// 비구조할당 문법을 사용하여 코드의 가독성을 높여줌
		const { info } = this.state;
		this.setState({
			info: info.concat(data),
		});
	};

	render() {
		return (
			<div>
				<PhoneForm onCreate={this.handleCreate} />
				{/* 객체화하여 값이 잘 들어가고 있는지 확인 */}
				{JSON.stringify(this.state.info)}
			</div>
		);
	}
}

export default App;
