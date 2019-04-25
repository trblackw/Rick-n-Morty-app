import React, { useContext, useEffect, Fragment } from 'react';
import { Store } from '../Store';
import { IEpisode } from '../interfaces';

const Favorites: React.FunctionComponent = (): JSX.Element => {
	const { state: { favorites }, dispatch } = useContext(Store);

	useEffect(() => {
		console.log(favorites);
	}, []);
	return (
		<div className='my-2 mx-auto p-3 border rounded shadow flex flex-col justify-center'>
			{favorites.length > 0 &&
				favorites.map((episode: IEpisode) => (
					<Fragment key={episode.id}>
						<div className='flex flex-row justify-start p-5 shadow rounded bg-indigo-dark text-white my-3'>
							<div>
								<div className="flex flex-col justify-center p-2 m-3">
                           <h4 className="text-4xl">{episode.name}</h4>
									<span>Aired: {episode.airdate}</span>
								</div>
								<img src={episode.image.original} alt='episode image' className="rounded"/>
                     </div>
                     <div className="inline-block">
                        {episode.summary}
                     </div>
						</div>
					</Fragment>
				))}
		</div>
	);
};

export default Favorites;
