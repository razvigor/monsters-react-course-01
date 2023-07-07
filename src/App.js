import { useState, useEffect } from 'react';
import CardList from './components/card-list/CardListComponet';
import './App.css';
import SearchBar from './components/search-bar/SearchBar';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();
		setSearchField(searchField);
	};

	useEffect(() => {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => setMonsters(users))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const filteredState = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);
		setFilteredMonsters(filteredState);
	}, [monsters, searchField]);

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
};

export default App;
