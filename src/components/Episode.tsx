import React, { useEffect, useContext, useState } from 'react';
import { Store, FETCH_SINGLE_EPISODE } from '../Store';

import { RouteComponentProps } from 'react-router-dom';
import { IEpisode } from '../interfaces';

type Params = { id: string };

//functional component type did not play well with RouteComponentProps
const Episode = ({ match }: RouteComponentProps<Params>): JSX.Element => {
   const { state: { episodeState } } = useContext(Store);
   const [selectedEpisode, setSelectedEpisode] = useState<IEpisode | undefined>(undefined)

   const fetchSelectedEpisode = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${match.params.id}`);
      const episode = await res.json();
      setSelectedEpisode(episode)
      // return updateEpisodes({ type: FETCH_SINGLE_EPISODE, payload: episode });
   };

   useEffect(() => {
      fetchSelectedEpisode();
   }, [match.params.id]);

   return selectedEpisode ? (
      <div className='mx-auto p-3 border rounded w-3/5'>
         <h3>{selectedEpisode && selectedEpisode.name}</h3>
         <div className='flex flex-row p-3 mx-auto justify-center w-1/2 bg-indigo-600 w-full text-white shadow'>
         <p className="mx-4">{selectedEpisode.air_date}</p>
         <p className="mx-4">{selectedEpisode.episode}</p>
         <a href={selectedEpisode.url} className="no-underline mx-4">View more</a>
         </div>
      </div>
   ) : <div>Loading...</div>;
};

export default Episode;
