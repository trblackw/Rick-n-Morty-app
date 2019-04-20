import React, { createContext, useReducer } from 'react';
export const FETCH_DATA: string = 'FETCH_DATA';

const reducer = (state: IState, { type, payload }: IAction): IState => {
	switch (type) {
		case FETCH_DATA:
			return { ...state, episodes: payload };
		default:
			return state;
	}
};

interface IAction {
	type: string;
	payload: any;
}
interface IState {
	episodes: [];
	favorites: [];
}

interface IError {
   statusCode: number
   message: string
}
const initialState: IState = {
	episodes: [],
	favorites: []
};
export const Store = createContext<IState | any>(initialState);

export const StoreProvider = ({ children }: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
