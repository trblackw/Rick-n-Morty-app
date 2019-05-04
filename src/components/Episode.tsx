import React, { useEffect, useContext } from 'react';
import { Store, FETCH_SINGLE_EPISODE } from '../Store';

import { RouteComponentProps } from 'react-router-dom';

type Params = { id: string };

//functional component type did not play well with RouteComponentProps
const Episode = ({ match }: RouteComponentProps<Params>): JSX.Element => {
   const { state: { episodeState: { episodes: { selectedEpisode }, updateEpisodes }} } = useContext(Store);

   const fetchSelectedEpisode = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${match.params.id}`);
      const episode = await res.json();
      return updateEpisodes({ type: FETCH_SINGLE_EPISODE, payload: episode })
   };

   useEffect(() => {
      fetchSelectedEpisode()
   }, []);

   useEffect(() => {
      console.log(selectedEpisode)
   }, [selectedEpisode])
   return <div>
      {selectedEpisode && selectedEpisode.name}
   </div>
};

export default Episode;
