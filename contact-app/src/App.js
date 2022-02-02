import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
	// 고유한 값을 위해 id 변수 생성
	id = 0;

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
			info: info.concat({
				// 기존의 데이터에 id만 1씩 늘리기
				...data,
				id: this.id++,
			}),
		});
	};

	handleRemove = (id) => {
		const { info } = this.state;
		this.setState({
			info: info.filter((info) => info.id !== id),
		});
	};

	handleUpdate = (id, data) => {
		const { info } = this.state;
		this.setState({
			info: info.map((info) => {
				if (info.id === id) {
					return {
						id,
						...data,
					};
				}
				return info;
			}),
		});
	};

	render() {
		return (
			<div>
				<PhoneForm onCreate={this.handleCreate} />
				<PhoneInfoList
					onUpdate={this.handleUpdate}
					onRemove={this.handleRemove}
					data={this.state.info}
				/>
			</div>
		);
	}
}

export default App;
