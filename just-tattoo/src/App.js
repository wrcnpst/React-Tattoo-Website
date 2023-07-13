import AppHeader from './App-Header';
import './App.css';
import TattooItem from './Tattoo-Item';

function App() {
	return (
		<div className='App'>
			<AppHeader />
			<div className='app-grid'>
				<TattooItem/>
				<TattooItem/>
				<TattooItem/>
				<TattooItem/>
			</div>
		</div>
	);
}

export default App;
