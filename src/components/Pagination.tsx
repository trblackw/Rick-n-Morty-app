import React from 'react';

interface Props {
   pages: number;
   setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ pages, setPage }): JSX.Element => {
   let pageLinks: JSX.Element[] = [];
   for (let i = 1; i <= pages; i++) {
      pageLinks.push(
         <button
            onClick={() => setPage(i)}
            key={i}
            className='inline-block mx-2 cursor-pointer border no-underline border-indigo-dark rounded py-1 px-3 bg-indigo text-white'>
            Page {i}
         </button>
      );
   }
   return <ul className='list-reset flex'>{pageLinks}</ul>;
};


export default Pagination;
