import AppHeader from './components/App-Header';
import './App.css';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoo';
import { useState } from 'react';

function App() {
	const [selectedTattoo, setSelectedTattoo] = useState(null);

	function onTattooOpenClick() {
		setSelectedTattoo(tattoos[1]);
	}

	const tattooElements = tattoos.map((tattoo, index) => {
		return <TattooItem key={index} tattoo={tattoo} />
	});

	let tattooPost = null;
	if (!!selectedTattoo) {
		tattooPost = <TattooPost tattoo={selectedTattoo}/>
	}

	return (
		<div className='App'>
			<AppHeader />
			<button onClick={onTattooOpenClick}>สักหน่อยมั้ยหละ</button>
			<div className='app-grid'>
				{tattooElements}
			</div>
			{tattooPost}
		</div>
	);
}

export default App;
