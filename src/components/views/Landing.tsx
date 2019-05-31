import React, { useEffect, useState } from 'react';
import { IGeneralInfo } from '../../interfaces';
import { GENERAL_INFO_URL } from '../../Store';
import Loading from '../elements/Loading';
import Error from '../elements/Error';

const Landing: React.FC = (): JSX.Element => {
   const [info, setInfo] = useState<IGeneralInfo | undefined>(undefined);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<{ message: string | null }>({ message: null });
   const [randomQuote, setRandomQuote] = useState<string>("Let's get riggidy riggidy wrecked son!");

   const fetchInfo = async (): Promise<void> => {
      try {
         setLoading(true);
         const res = await fetch(GENERAL_INFO_URL);
         const generalInfo = await res.json();
         setInfo(generalInfo);
         setLoading(false);
      } catch (error) {
         setError({ message: error.message });
         console.error(error);
      }
   };

   const fetchRandomQuote = async (): Promise<void> => {
      const res = await fetch('http://loremricksum.com/api/?paragraphs=1&quotes=1');
      const { data: quote } = await res.json();
      setRandomQuote(quote);
   };

   useEffect(() => {
      fetchInfo();
   }, []);
   useEffect(
      () => {
         console.log(info);
      },
      [info]
   );
   return loading || !info ? (
      <Loading color='hsl(106, 50%, 45%)' />
   ) : (
      <section className='font-sans antialiased w-full h-screen bg-orange-300 rounded py-8'>
         <div className='container mx-auto rounded shadow-lg'>
            <div className='p-8 w-full mx-auto bg-indigo-400 rounded-lg shadow-lg'>
               <div className='flex justify-center'>
                  <h2 className='text-white text-4xl text-center mr-3 font-normal align-middle'>"{randomQuote}"</h2>
                  <div className="mt-3">
                     <button
                        onClick={fetchRandomQuote}
                        className='bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-2 border border-orange-800 shadow rounded'>
                        Randomize
                     </button>
                  </div>
               </div>
                  <p className='text-sm text-center text-indigo-900'>This app is pretty much pointless -- but I found every Rick and Morty API out there & but it to work</p>
               <div className='my-16 flex flex-wrap pl-32 justify-center md:items-center w-full'>
                  <div className='bg-transparent z-10'>
                     <div className='mx-auto w-full'>
                        <img
                           src={info.image.original}
                           alt=''
                           height='650px'
                           width='450px'
                           className='mx-auto shadow-inner shadow-md'
                           style={{ objectFit: 'contain' }}
                        />
                     </div>
                  </div>
                  <div className='bg-indigo-700 rounded shadow w-5/6 md:w-1/2 z-0 mx-auto mt-1 md:-mt-0 md:-ml-1'>
                     <div className='py-8 text-center text-indigo-100 font-semibold uppercase'>{info.name}</div>
                     <div className='w-2/3 mx-auto flex justify-center'>
                        {info.genres.map((genre: string, i: number): JSX.Element => (
                           <span key={i} className='mx-2 text-white rounded shadow px-2 py-2 border border-indigo-800 bg-indigo-800'>
                              {genre}
                           </span>
                        ))}
                     </div>
                     <div className='py-8'>
                        <table className='w-3/4 mx-auto text-indigo-100 text-center border-collapse'>
                           <tbody>
                              <tr>
                                 <td className='px-2 py-4 border border-indigo-600'>Account management</td>
                                 <td className='px-2 py-4 border border-indigo-600'>Volume discounts</td>
                              </tr>
                              <tr>
                                 <td className='px-2 py-4 border border-indigo-600'>Migration assistance</td>
                                 <td className='px-2 py-4 border border-indigo-600'>Dedicated support</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <a href='#'>
                        <div className='py-8 opacity-50 bg-indigo-800 hover:bg-indigo-600 text-indigo-300 rounded rounded-t-none text-center uppercase font-bold flex items-center justify-center'>
                           <span>Contact sales</span>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              width='24'
                              height='24'
                              className='icon fill-current w-4 h-4 ml-2'>
                              <path
                                 d='M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z'
                                 className='heroicon-ui'
                              />
                           </svg>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            {error.message && <Error errorMessage={error.message} />}
         </div>
      </section>
   );
};

export default Landing;
