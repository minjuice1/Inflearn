import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
	static defaultProps = {
		data: [],
	};

	render() {
		const { data, onRemove, onUpdate } = this.props;

		// data가 없을 경우 null을 return, 그렇지 않으면 error
		// TypeError: Cannot read properties of undefined (reading 'map')
		if (!data) return null;
		const list = data.map((info) => (
			<PhoneInfo
				onUpdate={onUpdate}
				onRemove={onRemove}
				info={info}
				key={info.id}
			/>
		));
		return <div>{list}</div>;
	}
}

export default PhoneInfoList;
