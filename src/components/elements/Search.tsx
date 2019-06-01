import React, { Dispatch, SetStateAction, ChangeEvent, useState, useCallback, Fragment, useEffect } from 'react';
import { ICharacter } from '../../interfaces';

export interface Filters {
   name?: boolean;
   status?: boolean;
   species?: boolean;
   type?: boolean;
   gender?: boolean;
}

interface Props {
   filters: Filters;
   setFilters: Dispatch<SetStateAction<Filters>>;
   activeFilter: string;
   setActiveFilter: Dispatch<SetStateAction<string>>;
   search: string;
   setSearch: Dispatch<SetStateAction<string>>;
   searchData: ICharacter[];
   setSearchMatches: Dispatch<SetStateAction<ICharacter[]>>;
}

const Search: React.FC<Props> = ({
   filters,
   setFilters,
   activeFilter,
   setActiveFilter,
   search = '',
   setSearch,
   searchData,
   setSearchMatches
}): JSX.Element => {
   const [localSearchResults, setLocalSearchResults] = useState<ICharacter[]>([]);
   const applyFilter = (activeFilter: string): void => {
      //ensure only one filter is applied at a time
      const nulledFilters: Filters = { name: false, status: false, species: false, type: false, gender: false };
      const appliedFilter: Filters = { ...nulledFilters, [activeFilter]: true };
      setActiveFilter(activeFilter);
      setFilters(appliedFilter);
   };

   useEffect(
      () => {
         applySearch();
      },
      [search]
   );

   const applySearch = useCallback(() => {
      const query: false | RegExp = search !== '' && new RegExp(search, 'gi');
      //address 'any' typing
      const results = searchData.filter((character: ICharacter | any) => query && query.test(character[activeFilter]));
      setLocalSearchResults(results);
      setSearchMatches(results);
   }, [search]);

   const handleFilterClick = (filter: string) => {
      applyFilter(filter);
      setSearch('');
   };

   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      applySearch();
   };

   const activeClass = 'bg-indigo-600';
   const inactiveClass = 'bg-indigo-400 hover:bg-indigo-300';
   return (
      <section className='bg-indigo-800 h-50 p-8 rounded-md'>
         <div className='container mx-auto py-4'>
            <SearchInput activeFilter={activeFilter} search={search} handleInput={handleInput} />
            {localSearchResults.length > 0 &&
            search !== '' && (
               <Fragment>
                  <br />
                  <span className='text-gray-100 text-sm px-3 pt-12 absolute inset-x-0 ml-16 top-5 h-8'>{localSearchResults.length} results</span>
               </Fragment>
            )}
            <nav className='flex'>
               <button
                  onClick={() => handleFilterClick('name')}
                  className={`text-white py-2 px-3 font-medium mr-3 ${filters.name ? activeClass : inactiveClass}`}>
                  Name
               </button>
               <button
                  onClick={() => handleFilterClick('status')}
                  className={`text-white py-2 px-3 font-medium mx-3 ${filters.status ? activeClass : inactiveClass}`}>
                  Status
               </button>
               <button
                  onClick={() => handleFilterClick('species')}
                  className={`text-white py-2 px-3 font-medium mx-3 ${filters.species ? activeClass : inactiveClass}`}>
                  Species
               </button>
               <button
                  onClick={() => handleFilterClick('type')}
                  className={`text-white py-2 px-3 font-medium mx-3 ${filters.type ? activeClass : inactiveClass}`}>
                  Type
               </button>
               <button
                  onClick={() => handleFilterClick('gender')}
                  className={`text-white py-2 px-3 font-medium mx-3 ${filters.gender ? activeClass : inactiveClass}`}>
                  Gender
               </button>
            </nav>
         </div>
      </section>
   );
};

export default Search;

const SearchInput: React.FC<{ activeFilter: string; search: string; handleInput: (e: ChangeEvent<HTMLInputElement>) => void }> = ({
   activeFilter,
   search,
   handleInput
}): JSX.Element => {
   const inputClasses: string = 'w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg';

   const renderOptions = (): JSX.Element => {
      switch (activeFilter) {
         case 'status':
            return (
               <Fragment>
                  <option value='Alive' />
                  <option value='Dead' />
                  <option value="unknown" />
               </Fragment>
            );
         case 'gender':
            return (
               <Fragment>
                  <option value='Male' />
                  <option value='Female' />
                  <option value='Genderless' />
                  <option value='Unknown' />
               </Fragment>
            );
         default:
            return <option value='' label='Oops' />;
      }
   };
   if (activeFilter === 'status' || activeFilter === 'gender') {
      return (
         <Fragment>
            <input
               list='characters'
               className={inputClasses}
               type='search'
               value={search}
               onChange={handleInput}
               placeholder={`Search by ${activeFilter}`}
            />
            <datalist id='characters'>{renderOptions()}</datalist>
         </Fragment>
      );
   } else {
      return (
         <input className={inputClasses} type='search' value={search} onChange={handleInput} placeholder={`Search by ${activeFilter}`} />
      );
   }
};
