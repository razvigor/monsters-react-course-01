import React, { Component } from 'react';
import CardList from './components/card-list/CardListComponet';
import './App.css';
import SearchBar from './components/search-bar/SearchBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: '',
		};
		console.log('constructor');
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		console.log('render');
		return (
			<div className='app'>
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBar
					className='search-box'
					value={searchField}
					onchange={onSearchChange}
					placeholder='Search Monster'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
