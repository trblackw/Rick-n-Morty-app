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
      <div className='p-3 m-auto bg-indigo-darker text-grey-lightest'>
         {episodeState &&
            episodeState.episodes.length > 0 &&
            episodeState.episodes.map((episode: IEpisode) => (
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

const addToFavoritesBtn: string = 'bg-green-light mx-2 text-sm hover:bg-green text-grey-lightest shadow py-2 px-4 rounded-full';
const removeFromFavoritesBtn: string = 'bg-red-light mx-2 text-sm hover:bg-red text-grey-lightest shadow py-2 px-4 rounded-full';

export default Episodes;
