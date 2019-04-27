import React, { createContext, useReducer } from 'react';
import { IState, IAction, IEpisode } from './interfaces';
export const FETCH_DATA: string = 'FETCH_DATA';
export const ADD_TO_FAVORITES: string = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES: string = 'REMOVE_FROM_FAVORITES';
export const CLEAR_FAVORITES: string = 'CLEAR_FAVORITES';

const reducer = (state: IState, { type, payload }: IAction): IState => {
	switch (type) {
		case FETCH_DATA:
			return { ...state, episodes: payload };
		case ADD_TO_FAVORITES:
			const uniqueFavorites: IEpisode[] = [
				...state.favorites,
				payload
			].reduce((unique: IEpisode[], episode: IEpisode): IEpisode[] => {
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

const initialState: IState = {
	episodes: [],
	favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : []
};
export const Store = createContext<IState | any>(initialState);

export const StoreProvider = ({ children }: any): JSX.Element => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
