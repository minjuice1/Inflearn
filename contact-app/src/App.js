import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
	// 고유한 값을 위해 id 변수 생성
	id = 3;

	state = {
		info: [
			{
				id: 0,
				name: "가가가",
				phone: "000 - 000 - 0000",
			},
			{
				id: 1,
				name: "나나나",
				phone: "111 - 111 - 1111",
			},
			{
				id: 2,
				name: "다다다",
				phone: "222 - 222 - 2222",
			},
		],
		keyword: "",
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

	handleChangeKeyword = (e) => {
		this.setState({
			keyword: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<PhoneForm onCreate={this.handleCreate} />
				<input
					value={this.state.keyword}
					onChange={this.handleChangeKeyword}
					placeholder="검색 할 이름 입력해주세요"
				/>
				{/* indexOf함수가 index를 찾는 함수인데요. 없으면 -1를 리턴
        만약에 검색창에 '가'를 검색한다면, 가가가에서 가가 존재하기 때문에
        index는 0이 반환되고, 가가가의 info정보가 data에 추가 된다. */}
				<PhoneInfoList
					data={this.state.info.filter(
						(info) => info.name.indexOf(this.state.keyword) > -1,
					)}
					onUpdate={this.handleUpdate}
					onRemove={this.handleRemove}
				/>
			</div>
		);
	}
}

export default App;
