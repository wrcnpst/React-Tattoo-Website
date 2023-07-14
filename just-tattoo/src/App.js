import AppHeader from './components/App-Header';
import './App.css';
import TattooItem from './components/Tattoo-Item';
import TattooPost from './components/TattooPost';

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
			{/* <TattooPost/> */}
		</div>
	);
}

export default App;
