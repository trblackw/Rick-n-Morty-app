export interface IAppState {
   episodeState: { episodes: IEpisode[]; updateEpisodes: () => void };
   characterState: { characters: ICharacter[]; updateCharacters: () => void };
}

export interface IAction {
   type: string;
   payload: any;
}
export interface IEpisodeState {
   episodes: IEpisode[];
   favorites: IEpisode[];
}

export interface ICharacterState {
   characters: ICharacter[];
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

export interface ICharacter {
   episode: string[];
   gender: string;
   id: number;
   image: string;
   location: { name: string; url: string };
   name: string;
   origin: { name: string; url: string };
   species: string;
   status: 'Alive' | 'Dead';
   type?: string;
   url: string;
}

export interface IInfo {
   count: number;
   next: string;
   pages: number;
   prev?: string;
}

export interface ReducerFunc {
   (state: ICharacterState | IEpisodeState | any, { type, payload }: IAction): ICharacterState | IEpisodeState;
}
