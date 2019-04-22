import React, { createContext, useReducer } from 'react';
import { IState, IAction } from './interfaces';
export const FETCH_DATA: string = 'FETCH_DATA';
export const ADD_TO_FAVORITES: string = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES: string = "REMOVE_FROM_FAVORITES";

const reducer = (state: IState, { type, payload }: IAction): IState => {
	switch (type) {
		case FETCH_DATA:
			return { ...state, episodes: payload };
		case ADD_TO_FAVORITES:
			return { ...state, favorites: [...state.favorites, payload] };
		case REMOVE_FROM_FAVORITES:
			return { ...state, favorites: state.favorites.filter(({ id }) => id !== payload.id) };
		default:
			return state;
	}
};

const initialState: IState = {
	episodes: [],
	favorites: []
};
export const Store = createContext<IState | any>(initialState);

export const StoreProvider = ({ children }: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
