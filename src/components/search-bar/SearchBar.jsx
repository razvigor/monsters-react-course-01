import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		const { onchange, value, placeholder, className } = this.props;
		return (
			<>
				<input
					type='search'
					name='search'
					className={className}
					value={value}
					placeholder={placeholder}
					onChange={onchange}
				/>
			</>
		);
	}
}
