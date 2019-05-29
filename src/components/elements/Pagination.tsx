import React from 'react';

interface Props {
   pages: number;
   setPage: (page: number) => void;
   visible: boolean;
}

const Pagination: React.FC<Props> = ({ pages, setPage, visible }): JSX.Element => {
   let pageLinks: JSX.Element[] = [];
   for (let i = 1; i <= pages; i++) {
      pageLinks.push(
         <button
            onClick={() => setPage(i)}
            key={i}
            className={`inline-block mx-2 my-4 cursor-pointer border no-underline border-indigo-800 rounded py-1 px-3 bg-indigo-400 text-white ${visible
               ? 'visible'
               : 'invisible'}`}>
            Page {i}
         </button>
      );
   }
   return <ul className='list-reset flex justify-evenly'>{pageLinks}</ul>;
};

export default Pagination;
