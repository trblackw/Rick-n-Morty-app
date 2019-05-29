import React, { useEffect, useContext, useState } from 'react';
import { CHARACTERS_URL, Store, FETCH_CHARACTERS, generateEpisodesUrl } from '../../Store';
import { ICharacter } from '../../interfaces';
import Grid from '../elements/Grid';
import Search, { Filters } from '../elements/Search';
import useToggle from '../../hooks/useToggle';

const Characters: React.FC = (): JSX.Element => {
   const [loading, setLoading] = useState<boolean>(false);
   const [search, setSearch] = useState<string>('');
   const [page, setPage] = useState<number>(1);
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

   useEffect(
      () => {
         console.log('search', search);
         console.log('active filter', activeFilter);
      },
      [search]
   );

   useEffect(
      () => {
         fetchCharacters(page);
      },
      [page]
   );

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

   const determineStatus = (status: string): string => {
      let fontColor: string = 'text-gray-400';
      if (status === 'Alive') fontColor = 'text-green-400';
      if (status === 'Dead') fontColor = 'text-red-400';
      if (status === 'unknown') fontColor = 'text-blue-400';
      return fontColor;
   };

   return loading ? (
      <div>Loading ... </div>
   ) : (
      <div className='bg-indigo-600 p-10'>
         <button
            className={`${!open
               ? 'bg-orange-500 hover:bg-orange-600'
               : 'bg-red-600 hover:bg-red-700'} text-white mb-3 font-bold py-1 px-3 rounded`}
            onClick={() => setOpen(!open)}>
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
            />
         )}
         <Grid minColumnWidth={500} gridGap={30}>
            {characterState &&
               characterState.characters.map(({ id, name, status, species, type, image, location, episode }: ICharacter) => (
                  <div className='md:flex bg-white rounded shadow-xl p-5' key={id}>
                     <div className='md:flex-shrink-0'>
                        <img className='rounded-lg md:w-56' src={image} alt={`${name}'s avatar`} />
                     </div>
                     <div className='mt-4 md:mt-0 md:ml-6'>
                        <div className='uppercase tracking-wide text-lg text-indigo-600 font-bold'>{name}</div>
                        <a href='#' className='block mt-1 leading-tight font-semibold text-gray-900 hover:underline'>
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
                           <li className='mt-20'>
                              <span className='font-thin text-sm'>Featured in {episode.length} episodes</span>
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
