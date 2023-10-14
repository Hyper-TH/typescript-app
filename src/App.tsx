import React from 'react';
import './App.css';
import { Person } from './components/Person';

function App() {
  return (
		<div className="App">
			<Person
				name="Hyper"
				email="hyper@hyper.com"
				age={21}
				isMarried={true}
				friends={["GGanon" , "Glimpse", "Cheedo", "TopKid", "Ely", "NightSky"]}
			/>
		</div>
  	);
}

export default App;
