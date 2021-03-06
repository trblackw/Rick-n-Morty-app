import React, { useEffect, useContext, useState } from 'react';
import { CHARACTERS_URL, Store, FETCH_CHARACTERS, generateEpisodesUrl } from '../../Store';
import { ICharacter } from '../../interfaces';
import Grid from '../elements/Grid';
import Search, { Filters } from '../elements/Search';
import useToggle from '../../hooks/useToggle';
import Loading from '../elements/Loading';
import { formatTimeStamp } from '../../utils';
import Error from '../elements/Error';

const Characters: React.FC = (): JSX.Element => {
   const [loading, setLoading] = useState<boolean>(false);
   const [search, setSearch] = useState<string>('');
   const [error, setError] = useState<{ message: string | null }>({ message: null });
   const [characterCount, setCharacterCount] = useState<number>(20);
   const [searchMatches, setSearchMatches] = useState<ICharacter[]>([]);
   const { state: { characterState }, dispatch } = useContext(Store);
   const [open, setOpen] = useToggle(false);
   const [filters, setFilters] = useState<Filters>({
      name: true,
      status: false,
      species: false,
      type: false,
      gender: false
   });
   const [activeFilter, setActiveFilter] = useState<string>('name');

   useEffect(() => {
      fetchAllCharacters();
   }, []);

   const fetchAllCharacters = async (): Promise<void> => {
      setLoading(true);
      const pages: string[] = [];
      for (let i = 1; i <= 25; i++) {
         pages.push(generateEpisodesUrl(CHARACTERS_URL, i));
      }
      try {
         const characters = await Promise.all(pages.map(page => fetch(page).then(res => res.json()).then(({ results }) => results)));
         dispatch({ type: FETCH_CHARACTERS, payload: characters.flat() });
         setLoading(false);
      } catch (error) {
         console.error(error);
         setError({ message: error.message });
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
   }, []);

   const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      !searchMatches.length && setCharacterCount((prevCount: number): number => prevCount + 20);
   };

   const determineStatus = (status: string): string => {
      let fontColor: string = 'text-gray-400';
      if (status === 'Alive') fontColor = 'text-green-400';
      if (status === 'Dead') fontColor = 'text-red-400';
      if (status === 'unknown') fontColor = 'text-orange-400';
      return fontColor;
   };

   const renderCharacters = (query: string): JSX.Element | undefined => {
      let charactersToRender;
      if (!query.length && characterState && characterState.characters) {
         charactersToRender = characterState.characters.slice(0, characterCount);
      } else if (searchMatches.length) {
         charactersToRender = searchMatches;
      }

      return (
         charactersToRender &&
         charactersToRender.map(({ id, name, status, species, type, image, location, episode, created, origin }: ICharacter) => (
            <div className='md:flex bg-white rounded shadow-xl p-5' key={id * Math.random()}>
               <div className='md:flex-shrink-0'>
                  <img className='rounded-lg md:w-56 shadow-md border-2 border-green-300' src={image} alt={`${name}'s avatar`} />
               </div>
               <div className='mt-4 md:mt-0 md:ml-6'>
                  <div className='uppercase tracking-wide text-lg text-indigo-600 font-bold'>{name}</div>
                  <span className='text-indigo-400'>Last Known Location: </span>
                  <a href='#' className='block mt-1 mb-2 leading-tight font-semibold text-blue-400 hover:underline'>
                     {location.name}
                  </a>
                  <ul className='list-reset mt-2 text-gray-600'>
                     {type && (
                        <li>
                           <span className='font-bold'>Type:</span> {type}
                        </li>
                     )}
                     <li>
                        <span className='font-bold'>Status:</span> <span className={determineStatus(status)}>{status}</span>
                     </li>
                     <li>
                        <span className='font-bold'>Species:</span> {species}
                     </li>
                     <li>
                        <span className='font-bold'>Created:</span> {formatTimeStamp(created)}
                     </li>
                     <li>
                        <span className='font-bold'>Origin:</span>{' '}
                        <a href='#' className='mt-1 mb-2 leading-tight font-semibold text-blue-400 hover:underline'>
                           {origin.name}
                        </a>
                     </li>
                     <li className='mt-20'>
                        <span className='font-thin text-sm'>Featured in {episode.length} episodes</span>
                     </li>
                  </ul>
               </div>
               {error.message && <Error errorMessage={error.message} />}
            </div>
         ))
      );
   };

   return loading ? (
      <Loading />
   ) : (
      <div className='bg-indigo-600 p-10'>
         <button
            className={`${!open
               ? 'bg-orange-500 hover:bg-orange-600'
               : 'bg-red-600 hover:bg-red-700'} text-white mb-3 font-bold py-1 px-3 rounded`}
            onClick={() => {
               setOpen(!open);
               setSearch('');
            }}>
            {!open ? 'Refine Search' : 'Cancel'}
         </button>
         {open && (
            <Search
               search={search}
               setSearch={setSearch}
               filters={filters}
               setFilters={setFilters}
               activeFilter={activeFilter}
               setActiveFilter={setActiveFilter}
               searchData={characterState.characters}
               setSearchMatches={setSearchMatches}
            />
         )}
         <Grid minColumnWidth={500} gridGap={30}>
            {renderCharacters(search)}
         </Grid>
      </div>
   );
};

export default Characters;
