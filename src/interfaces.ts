export interface IAppState {
   episodeState: { episodes: IEpisode[]; updateEpisodes(episode: IEpisode): void };
   characterState: { characters: ICharacter[]; updateCharacters(character: ICharacter): void };
}

/**
 * STATE MANAGEMENT
 */
export interface IAction {
   type: string;
   payload: any;
}

export type ReducerFunc = (state: ICharacterState | IEpisodeState | any, action: IAction) => any;

/**
 * GENERAL SHOW INFO
 */

 export interface IGeneralInfo {
   genres: string[];
   id: number;
   image: { medium: string; original: string };
   name: string;
   network: { name: string; country: string };
   officialSite: string;
   premiered: string;
   rating: { average: string };
   runtime: number;
   schedule: { days: string[]; time: string };
   summary: string;
   updated: number;
 }

/**
 * EPISODES
 */
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
export interface IEpisode {
   id: number;
   name: string;
   characters: string[];
   url: string;
   episode: string;
   created: string;
   air_date: string;
}


/**
 * CHARACTERS
 */
export interface ICharacterState {
   characters: ICharacter[];
   info: Info | {};
}


export interface ICharacter {
   episode: string[];
   gender: string;
   id: number;
   created: string;
   image: string;
   location: { name: string; url: string };
   name: string;
   origin: { name: string; url: string };
   species: string;
   status: 'Alive' | 'Dead' | 'unknown';
   type?: string;
   url: string;
}



/**
 * LOCATION
 */
export interface ILocation {
   id: number;
   name: string;
   type: string;
   dimension: string;
   residents: string[];
   url: string;
   created: string;
}