import ContentSide from './components/ContentSide/ContentSide';
import NavigationSide from './components/NavigationSide/NavigationSide';

const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<div className='content'>
					<NavigationSide />
					<ContentSide />
				</div>
			</div>
		</div>
	);
};

export default App;
