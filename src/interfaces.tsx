export interface IAction {
   type: string;
   payload: any;
}
export interface IState {
   episodes: Array<IEpisode>;
   favorites: Array<IEpisode>;
}

export interface IEpisode {
   id: number;
   name: string;
   url: string;
   summary: string;
   image: { medium: string; original: string };
   season: number;
   airdate: string;
   airtime: string;
}
