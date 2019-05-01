import React, { useContext, useEffect, Fragment, useState } from 'react';
import { Store, FETCH_EPISODES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, EPISODES_URL } from '../Store';
import { Link } from 'react-router-dom';
import { IEpisode, IAction } from '../interfaces';

const Episodes: React.FunctionComponent = (): JSX.Element => {
   const { state: { episodeState: { episodes, updateEpisodes } } } = useContext(Store);

   useEffect(() => {
      fetchEpisodes();
   }, []);

   const fetchEpisodes = async (): Promise<void> => {
      try {
         const res = await fetch(EPISODES_URL);
         const { info, results: episodes  } = await res.json();
         return updateEpisodes({ type: FETCH_EPISODES, payload: episodes });
      } catch (error) {
         console.error(error);
      }
   };

   const toggleFavorite = (episode: IEpisode): IAction =>
      updateEpisodes({
         type: episodes.favorites.includes(episode) ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
         payload: episode
      });

   return (
      <div className='p-3 m-auto bg-indigo-darker text-grey-lightest'>
         {episodes.episodes.length > 0 &&
            episodes.episodes.map((episode: IEpisode) => (
               <Fragment key={episode.id}>
                  <div className='m-4 mx-auto p-5 bg-indigo shadow rounded w-3/5 flex justify-between'>
                     <div>
                        <h3>
                           <a href={episode.url} className='no-underline text-grey-lightest hover:text-grey-light'>
                              {episode.name}
                           </a>
                        </h3>
                        <p>Season {episode.episode}</p>
                     </div>
                     <br />
                     <div>
                        <Link to={`episode/${episode.id}`}>
                        <button className='bg-orange-light text-sm mx-2 hover:bg-orange text-grey-lightest shadow py-2 px-4 rounded-full'>
                           View details
                        </button>
                        </Link>
                        <button
                           className={episodes.favorites.includes(episode) ? removeFromFavoritesBtn : addToFavoritesBtn}
                           onClick={() => toggleFavorite(episode)}>
                           {episodes.favorites.includes(episode) ? 'Remove from' : 'Add to'} favorites
                        </button>
                     </div>
                  </div>
               </Fragment>
            ))}
      </div>
   );
};

const addToFavoritesBtn: string = 'bg-green-light mx-2 text-sm hover:bg-green text-grey-lightest shadow py-2 px-4 rounded-full';
const removeFromFavoritesBtn: string = 'bg-red-light mx-2 text-sm hover:bg-red text-grey-lightest shadow py-2 px-4 rounded-full';

export default Episodes;
