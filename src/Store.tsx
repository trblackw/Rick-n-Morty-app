import React, { createContext, useReducer, useEffect, useState } from 'react';
import { IEpisodeState, IAction, IEpisode, ReducerFunc, ICharacterState, IAppState } from './interfaces';

//EPISODES
export const EPISODES_URL: string = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
export const FETCH_EPISODES: string = 'FETCH_EPISODES';
export const ADD_TO_FAVORITES: string = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES: string = 'REMOVE_FROM_FAVORITES';
export const CLEAR_FAVORITES: string = 'CLEAR_FAVORITES';

const episodeReducer: ReducerFunc = (state: IEpisodeState, { type, payload }: IAction): IEpisodeState => {
   switch (type) {
      case FETCH_EPISODES:
         return { ...state, episodes: payload };
      case ADD_TO_FAVORITES:
         const uniqueFavorites: IEpisode[] = [...state.favorites, payload].reduce((unique: IEpisode[], episode: IEpisode): IEpisode[] => {
            let episodeIds: number[] = unique.map(({ id }: IEpisode): number => id);
            !episodeIds.includes(episode.id) && unique.push(episode);
            return unique;
         }, []);

         localStorage.setItem('favorites', JSON.stringify(uniqueFavorites));
         return { ...state, favorites: uniqueFavorites };
      case REMOVE_FROM_FAVORITES:
         localStorage.clear();
         localStorage.setItem('favorites', JSON.stringify(state.favorites.filter(({ id }) => id !== payload.id)));
         return { ...state, favorites: state.favorites.filter(({ id }) => id !== payload.id) };
      case CLEAR_FAVORITES:
         localStorage.clear();
         return { ...state, favorites: [] };
      default:
         return state;
   }
};

//CHARACTERS
export const CHARACTERS_URL: string = 'https://rickandmortyapi.com/api/character/';
export const FETCH_CHARACTERS: string = 'FETCH_CHARACTERS';

const characterReducer: ReducerFunc = (state: ICharacterState, { type, payload }: IAction): ICharacterState => {
   switch (type) {
      case FETCH_CHARACTERS:
         return { ...state, characters: payload };
      default:
         return state;
   }
};

const initialEpisodeState: IEpisodeState = {
   episodes: [],
   favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : []
};

const initialCharacterState: ICharacterState = {
   characters: []
};
export const Store = createContext<ICharacterState | IEpisodeState | any>({ ...initialEpisodeState, ...initialCharacterState });

export const StoreProvider = ({ children }: any): JSX.Element => {
   const [episodes, updateEpisodes] = useReducer(episodeReducer, initialEpisodeState);
   const [characters, updateCharacters] = useReducer(characterReducer, initialCharacterState);
   //todo: address 'any' type
   const [appState, setAppState] = useState<IAppState | any>({
      episodeState: { episodes, updateEpisodes },
      characterState: { characters, updateCharacters }
   });
   const generateAppState = () =>
      setAppState({
         episodeState: { episodes, updateEpisodes },
         characterState: { characters, updateCharacters }
      });
   useEffect(
      () => {
         generateAppState();
      },
      [episodes, characters]
   );

   return <Store.Provider value={{ state: appState }}>{children}</Store.Provider>;
};
