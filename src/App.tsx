import React, { useContext, useEffect } from 'react';
import { Store, FETCH_DATA } from './Store';
const App: React.FunctionComponent = (): JSX.Element => {
	const { state: { episodes, favorites }, dispatch } = useContext(Store);

	useEffect(() => {
		fetchEpisodes();
	}, []);

	useEffect(
		() => {
			console.log(episodes);
		},
		[episodes]
	);

	const fetchEpisodes = async (): Promise<void> => {
		try {
			const res = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
			const { _embedded: { episodes } } = await res.json();
			return dispatch({ type: FETCH_DATA, payload: episodes });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="p-3 m-auto bg-grey">
			<header className="App-header">Rick & Morty</header>
		</div>
	);
};

export default App;
