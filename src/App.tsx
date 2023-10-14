import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {

	// const getAge = (name: string): number => {
	// 	return 42
	// }; 

  	return (
		<div className="App">
			<Person
				name="Hyper"
				email="hyper@hyper.com"
				age={21}
				isMarried={true}
				friends={["GGanon" , "Glimpse", "Cheedo", "TopKid", "Ely", "NightSky"]}
				country={Country.Ireland}
			/>
		</div>
  	);
}

export default App;
