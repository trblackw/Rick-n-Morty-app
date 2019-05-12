import React, { createContext, useReducer } from 'react';
import { IEpisodeState, IAction, IEpisode, ReducerFunc, ICharacterState } from './interfaces';

//EPISODES
const EPISODES_URL: string = 'https://rickandmortyapi.com/api/episode/';
export const FETCH_EPISODES: string = 'FETCH_EPISODES';
export const ADD_TO_FAVORITES: string = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES: string = 'REMOVE_FROM_FAVORITES';
export const CLEAR_FAVORITES: string = 'CLEAR_FAVORITES';
export const FETCH_SINGLE_EPISODE: string = 'FETCH_SINGLE_EPISODE';
export const generateEpisodesUrl = (page: number = 1) => `${EPISODES_URL}?page=${page}`;

const episodeReducer: ReducerFunc = (state: IEpisodeState = initialEpisodeState, { type, payload }: IAction): IEpisodeState => {
   switch (type) {
      case FETCH_EPISODES:
         return { ...state, episodes: payload.episodes, info: payload.info };
      case ADD_TO_FAVORITES:
         const uniqueFavorites: IEpisode[] = [...state.favorites, payload].reduce((unique: IEpisode[], episode: IEpisode): IEpisode[] => {
            let episodeIds: number[] = unique.map(({ id }: IEpisode): number => id);
            !episodeIds.includes(episode.id) && unique.push(episode);
            return unique;
         }, []);
         localStorage.setItem('favorites', JSON.stringify(uniqueFavorites));
         return { ...state, favorites: uniqueFavorites };
      case FETCH_SINGLE_EPISODE:
         localStorage.setItem('selectedEpisode', JSON.stringify(payload));
         return { ...state, selectedEpisode: payload };
      case REMOVE_FROM_FAVORITES:
         localStorage.clear();
         localStorage.setItem('favorites', JSON.stringify(state.favorites && state.favorites.filter(({ id }) => id !== payload.id)));
         return { ...state, favorites: state.favorites && state.favorites.filter(({ id }) => id !== payload.id) };
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

const characterReducer: ReducerFunc = (state: ICharacterState = initialCharacterState, { type, payload }: IAction): ICharacterState => {
   switch (type) {
      case FETCH_CHARACTERS:
         return { ...state, characters: payload };
      default:
         return state;
   }
};

const combineReducers = (reducers: { [reducer: string]: ReducerFunc }): ((state: any, action: any) => { state: any }) => {
   return (state: any = {}, action: IAction) => {
      return Object.keys(reducers).reduce((nextState: any, key: any) => {
         // eslint-disable-next-line no-param-reassign
         nextState[key] = reducers[key](state[key], action);
         return nextState;
      }, {});
   };
};

const initialEpisodeState: IEpisodeState = {
   episodes: [],
   info: {},
   favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : []
};

const initialCharacterState: ICharacterState = {
   characters: []
};
export const Store = createContext<ICharacterState | IEpisodeState | any>({ ...initialEpisodeState, ...initialCharacterState });

export const StoreProvider = ({ children }: any): JSX.Element => {
   //state key is a required prop on initialState arg passed to useReducer
   const appReducers = combineReducers({
      episodeState: episodeReducer,
      characterState: characterReducer
   });
   const [state, dispatch] = useReducer<any>(appReducers, { ...initialEpisodeState, ...initialCharacterState });
   console.log('TCL: state', state);

   return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
