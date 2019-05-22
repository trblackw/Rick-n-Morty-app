import React, { useContext, useEffect, Fragment, useState } from 'react';
import { Store, FETCH_EPISODES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, generateEpisodesUrl } from '../Store';
import { Link } from 'react-router-dom';
import { IEpisode, IAction } from '../interfaces';
import Pagination from './Pagination';

const Episodes: React.FC = (): JSX.Element => {
   const { state: { episodeState }, dispatch } = useContext(Store);
   const [page, setPage] = useState<number>(1);

   useEffect(() => {
      fetchEpisodes();
   }, [page]);

   const fetchEpisodes = async (): Promise<void> => {
      try {
         const res = await fetch(generateEpisodesUrl(page));
         const { info, results: episodes } = await res.json();
         return dispatch({ type: FETCH_EPISODES, payload: { episodes, info } });
      } catch (error) {
         console.error(error);
      }
   };

   const toggleFavorite = (episode: IEpisode): IAction =>
      dispatch({
         type: episodeState.favorites.includes(episode) ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
         payload: episode
      });

   return (
      <div className='p-3 m-auto bg-indigo-500 text-gray-100'>
         {episodeState &&
            episodeState.episodes.length > 0 &&
            episodeState.episodes.map((episode: IEpisode) => (
               <Fragment key={episode.id}>
                  <div className='m-4 mx-auto p-5 bg-indigo-700 shadow rounded w-3/5 flex justify-between'>
                     <div>
                        <h3>
                           <a href={episode.url} className='no-underline text-gray-100 hover:text-gray-300'>
                              {episode.name}
                           </a>
                        </h3>
                        <p>Season {episode.episode}</p>
                     </div>
                     <br />
                     <div>
                        <Link to={`episode/${episode.id}`}>
                           <button className='bg-orange-400 text-sm mx-2 hover:bg-orange-300 text-grey-100 shadow py-2 px-4 rounded-full'>
                              View details
                           </button>
                        </Link>
                        <button
                           className={episodeState.favorites.includes(episode) ? removeFromFavoritesBtn : addToFavoritesBtn}
                           onClick={() => toggleFavorite(episode)}>
                           {episodeState.favorites.includes(episode) ? 'Remove from' : 'Add to'} favorites
                        </button>
                     </div>
                  </div>
               </Fragment>
            ))}
         {episodeState && episodeState.info && <Pagination pages={episodeState.info.pages} setPage={setPage}/>}
      </div>
   );
};

const addToFavoritesBtn: string = 'bg-green-400 mx-2 text-sm hover:bg-green text-gray-100 shadow py-2 px-4 rounded-full';
const removeFromFavoritesBtn: string = 'bg-red-200 mx-2 text-sm hover:bg-red text-gray-100 shadow py-2 px-4 rounded-full';

export default Episodes;
