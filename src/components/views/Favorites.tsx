import React, { useContext, useEffect, Fragment } from 'react';
import { Store } from '../../Store';
import { IEpisode } from '../../interfaces';

const Favorites: React.FC = (): JSX.Element => {
   const { state: { episodeState } } = useContext(Store);

   useEffect(
      () => {
         console.log(episodeState);
      },
      [episodeState]
   );

   return (
      <div className='p-5 bg-indigo-darker flex flex-col justify-center'>
         {episodeState && episodeState.favorites && episodeState.favorites.length > 0 && (
            episodeState.favorites.map((episode: IEpisode) => (
               <Fragment key={episode.id}>
                  <div className='flex flex-row justify-start p-5 shadow rounded bg-indigo-600 text-white my-3'>
                     <div>
                        <div className='flex flex-col justify-center p-2 m-3'>
                           <h4 className='text-4xl'>{episode.name}</h4>
                           <span>Aired: {episode.air_date}</span>
                        </div>
                     </div>
                  </div>
               </Fragment>
            ))
         )}
      </div>
   );
};

export default Favorites;
