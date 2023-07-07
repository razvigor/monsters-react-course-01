import React, { Component } from 'react';
import CardItem from '../card-item/CardItem';

export default class CardListComponet extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className='card-list'>
				{monsters.map((monster) => {
					return <CardItem monster={monster} />;
				})}
			</div>
		);
	}
}
