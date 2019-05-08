import React, { useEffect, useContext } from 'react';
import { CHARACTERS_URL } from '../Store';

const Characters: React.FC = (): JSX.Element => {
   useEffect(() => {
      fetchCharacters();
   }, []);

   const fetchCharacters = async (): Promise<void> => {
      const res = await fetch(CHARACTERS_URL);
      const json = await res.json();
      console.log(json);
   };
   return <div>CHARACTERS</div>;
};

export default Characters;
