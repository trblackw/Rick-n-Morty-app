import React, { useContext, useEffect, Fragment, useState, ChangeEvent } from 'react';
import { Store, FETCH_EPISODES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, generateEpisodesUrl } from '../Store';
import { Link } from 'react-router-dom';
import { IEpisode, IAction } from '../interfaces';
import Pagination from './Pagination';
import Grid from './Grid';

const Episodes: React.FC = (): JSX.Element => {
   const { state: { episodeState }, dispatch } = useContext(Store);
   const [page, setPage] = useState<number>(1);
   const [search, setSearch] = useState<string>('');
   const [searchMatches, setSearchMatches] = useState<IEpisode[]>([]);

   useEffect(
      () => {
         fetchEpisodes();
      },
      [page]
   );

   useEffect(
      () => {
         searchEpisodes();
      },
      [search]
   );

   const fetchEpisodes = async (): Promise<void> => {
      try {
         const res = await fetch(generateEpisodesUrl(page));
         const { info, results: episodes } = await res.json();
         return dispatch({ type: FETCH_EPISODES, payload: { episodes, info } });
      } catch (error) {
         console.error(error);
      }
   };

   const searchEpisodes = () => {
      const query: false | RegExp = search !== '' && new RegExp(search, 'gi');
      const episodes: false | IEpisode[] = episodeState && episodeState.episodes;
      if (!query || !episodes) return;
      setSearchMatches(episodes.filter(({ name }: IEpisode) => query.test(name)));
   };

   const toggleFavorite = (episode: IEpisode): IAction =>
      dispatch({
         type: episodeState.favorites.includes(episode) ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
         payload: episode
      });

   const renderEpisodes = (episodes: IEpisode[]): JSX.Element[] =>
      episodes.map((episode: IEpisode): JSX.Element => (
         <Fragment key={episode.id}>
            <div className='p-5 bg-indigo-700 shadow rounded mx-auto w-4/5 flex justify-between'>
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
      ));

   return !episodeState ? <div>Loading...</div> : (
      <div className='p-3 m-auto bg-indigo-500 text-gray-100'>
         <div className='flex justify-between'>
            {episodeState && episodeState.info && <Pagination pages={episodeState.info.pages} setPage={setPage} />}
            <div className='align-middle'>
               <input
                  type='text'
                  placeholder='Search episodes'
                  className='mt-4 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  value={search}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
               />
            </div>
         </div>
         <Grid minColumnWidth={650} gridGap={20}>
            {episodeState.episodes && search.length ? renderEpisodes(searchMatches) : renderEpisodes(episodeState.episodes)}
            {/* {episodeState.episodes ? renderEpisodes(episodeState.episodes) : <div>Loading...</div>} */}
         </Grid>
         {episodeState.info && <Pagination pages={episodeState.info.pages} setPage={setPage} />}
      </div>
   );
};

const addToFavoritesBtn: string = 'bg-green-400 mx-2 text-sm hover:bg-green text-gray-100 shadow py-2 px-4 rounded-full';
const removeFromFavoritesBtn: string = 'bg-red-200 mx-2 text-sm hover:bg-red text-gray-100 shadow py-2 px-4 rounded-full';

export default Episodes;
