import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';

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
   setSearch: Dispatch<SetStateAction<string>>
}

const Search: React.FC<Props> = ({ filters, setFilters, activeFilter, setActiveFilter, search = "", setSearch }): JSX.Element => {
   const applyFilter = (activeFilter: string): void => {
      //ensure only one filter is applied at a time
      const nulledFilters: Filters = { name: false, status: false, species: false, type: false, gender: false };
      const appliedFilter: Filters = { ...nulledFilters, [activeFilter]: true };
      setActiveFilter(activeFilter);
      setFilters(appliedFilter);
   }

   const activeClass = 'bg-indigo-600';
   const inactiveClass = 'bg-indigo-400 hover:bg-indigo-300';
   return (
      <section className='bg-indigo-800 h-50 p-8'>
         <div className='container mx-auto py-4'>
            <input
               className='w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg'
               type='search'
               value={search}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
               placeholder={`Search by ${activeFilter}`}
            />
            <nav className='flex'>
               <button onClick={() => applyFilter('name')} className={`text-white py-2 px-3 font-medium mr-3 ${filters.name ? activeClass : inactiveClass}`}>Name</button>
               <button onClick={() => applyFilter('status')} className={`text-white py-2 px-3 font-medium mx-3 ${filters.status ? activeClass : inactiveClass}`}>Status</button>
               <button onClick={() => applyFilter('species')} className={`text-white py-2 px-3 font-medium mx-3 ${filters.species ? activeClass : inactiveClass}`}>Species</button>
               <button onClick={() => applyFilter('type')} className={`text-white py-2 px-3 font-medium mx-3 ${filters.type ? activeClass : inactiveClass}`}>Type</button>
               <button onClick={() => applyFilter('gender')} className={`text-white py-2 px-3 font-medium mx-3 ${filters.gender ? activeClass : inactiveClass}`}>Gender</button>
            </nav>
         </div>
      </section>
   );
};

export default Search;
