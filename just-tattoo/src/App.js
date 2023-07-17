import AppHeader from './components/App-Header';
import './App.css';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoo';
import { useState } from 'react';

function App() {
	const [selectedTattoo, setSelectedTattoo] = useState(null);

	function onTattooOpenClick(theTattoo) {
		setSelectedTattoo(theTattoo);
	}

	function onTattooCloseClick() {
		setSelectedTattoo(null);
	}

	const tattooElements = tattoos.map((tattoo, index) => {
		return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>
	});

	let tattooPost = null;
	if (!!selectedTattoo) {
		tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick}/>
	}

	return (
		<div className='App'>
			<AppHeader />
			
			<div className='app-grid'>
				{tattooElements}
			</div>
			{tattooPost}
		</div>
	);
}

export default App;