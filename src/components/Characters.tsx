import React, { useEffect, useContext, useState, useCallback } from 'react';
import { CHARACTERS_URL, Store, FETCH_CHARACTERS, generateEpisodesUrl } from '../Store';
import { ICharacter } from '../interfaces';
import Grid from './Grid';
import Pagination from './Pagination';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Characters: React.FC = (): JSX.Element => {
   const [loading, setLoading] = useState<boolean>(false);
   const [search, setSearch] = useState<string>('');
   const [page, setPage] = useState<number>(1);
   const [visibleCharacters, setVisibleCharacters] = useState<ICharacter[]>([]);
   const [scrollState, setScrollState] = useState({
      
   })
   const [searchMatches, setSearchMatches] = useState<ICharacter[]>([]);
   const { state: { characterState }, dispatch } = useContext(Store);

   useEffect(() => {
      console.log(characterState)
   }, [characterState])

   useEffect(
      () => {
         fetchCharacters(page);
      },
      [page]
   );

   useEffect(() => {
      console.log(page)
   }, [page])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
   }, []);

   const fetchCharacters = async (page: number = 1): Promise<void> => {
      setLoading(true);
      const res = await fetch(generateEpisodesUrl(CHARACTERS_URL, page));
      const { info, results: characters } = await res.json();
      dispatch({ type: FETCH_CHARACTERS, payload: { characters, info } });
      setLoading(false);
   };

   const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setPage((prevPage: number) => prevPage + 1);
 
   };

   return loading ? (
      <div>Loading ... </div>
   ) : (
      <div className='bg-indigo-700 p-5'>
         <Grid minColumnWidth={500} gridGap={30}>
            {characterState &&
               characterState.characters.map(({ id, name, status, species, type, image, location }: ICharacter) => (
                  <div className='md:flex bg-white rounded shadow-xl p-5' key={id}>
                     <div className='md:flex-shrink-0'>
                        <img className='rounded-lg md:w-56' src={image} alt={`${name}'s avatar`} />
                     </div>
                     <div className='mt-4 md:mt-0 md:ml-6'>
                        <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>{name}</div>
                        <a href='#' className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>
                           {location.name}
                        </a>
                        <ul className='list-reset mt-2 text-gray-600'>
                           {type && <li>Type: {type}</li>}
                           <li>
                              <span className='font-bold'>Status:</span> {status}
                           </li>
                           <li>
                              <span className='font-bold'>Species:</span> {species}
                           </li>
                        </ul>
                     </div>
                  </div>
               ))}
         </Grid>
      </div>
   );
};

export default Characters;
