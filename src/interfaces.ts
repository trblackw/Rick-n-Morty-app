export interface IAppState {
   episodeState: { episodes: IEpisode[]; updateEpisodes(episode: IEpisode): void };
   characterState: { characters: ICharacter[]; updateCharacters(character: ICharacter): void };
}

export interface IAction {
   type: string;
   payload: any;
}

export type Info = {
   count: number;
   pages: number;
   next: string;
   prev: string;
}
export interface IEpisodeState {
   episodes: IEpisode[];
   favorites?: IEpisode[];
   selectedEpisode?: IEpisode;
   info: Info | {};
   // updateEpisodes(episode: IEpisode): void;
}

export interface ICharacterState {
   characters: ICharacter[];
   info: Info | {};
}

export interface IEpisode {
   id: number;
   name: string;
   characters: string[];
   url: string;
   episode: string;
   created: string;
   air_date: string;
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
   status: 'Alive' | 'Dead' | 'unknown';
   type?: string;
   url: string;
}

export interface IInfo {
   count: number;
   next: string;
   pages: number;
   prev?: string;
}


export type ReducerFunc = (state: ICharacterState | IEpisodeState | any, action: IAction) => any;
