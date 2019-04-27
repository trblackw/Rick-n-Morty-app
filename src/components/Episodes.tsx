import React, {useContext, useEffect, Fragment, useState} from 'react';
import {Store, FETCH_DATA, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../Store';
import {IEpisode, IAction} from '../interfaces';

const Episodes = () => {
    const {
        state: {episodes, favorites},
        dispatch
    } = useContext(Store);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchEpisodes();
    }, []);

    const fetchEpisodes = async (): Promise<void> => {
        try {
            const res = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
            const {
                _embedded: {episodes}
            } = await res.json();
            return dispatch({type: FETCH_DATA, payload: episodes});
        } catch (error) {
            console.error(error);
        }
    };

    const toggleFavorite = (episode: IEpisode): IAction =>
        dispatch({
            type: favorites.includes(episode) ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
            payload: episode
        });
    return (
        <div className='p-3 m-auto bg-indigo-darker text-grey-lightest'>
            {episodes.length > 1 &&
                episodes.map((episode: IEpisode) => (
                    <Fragment key={episode.id}>
                        <div className='m-4 mx-auto p-5 bg-indigo shadow rounded w-2/5 flex justify-between'>
                            <div>
                                <h3>
                                    <a
                                        href={episode.url}
                                        className='no-underline text-grey-lightest hover:text-grey-light'>
                                        {episode.name}
                                    </a>
                                </h3>
                                <p>Season {episode.season}</p>
                                <div style={imageContainer}>
                                    <img
                                        src={episode.image.medium}
                                        alt='episode image'
                                        style={{objectFit: 'cover', width: '100px', minHeight: '100px'}}
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <button className='bg-orange-light text-sm mx-2 hover:bg-orange text-grey-lightest shadow py-2 px-4 rounded-full'>
                                    View summary
                                </button>
                                <button
                                    className={favorites.includes(episode) ? removeFromFavoritesBtn : addToFavoritesBtn}
                                    onClick={() => toggleFavorite(episode)}>
                                    {favorites.includes(episode) ? 'Remove from' : 'Add to'} favorites
                                </button>
                            </div>
                        </div>
                        {open && (
                            <section data-episode={episode.id}>
                                <p className='font-thin'>{episode.summary}</p>
                            </section>
                        )}
                    </Fragment>
                ))}
        </div>
    );
};

const addToFavoritesBtn: string =
    'bg-green-light mx-2 text-sm hover:bg-green text-grey-lightest shadow py-2 px-4 rounded-full';
const removeFromFavoritesBtn: string =
    'bg-red-light mx-2 text-sm hover:bg-red text-grey-lightest shadow py-2 px-4 rounded-full';

const imageContainer = {
    width: '100px',
    height: '100px',
    clipPath: 'circle(50% at 50% 50%)',
    margin: '0 auto',
    marginTop: '15px'
};

const image = {
    width: '100px',
    minHeight: '100px',
    objectFit: 'cover'
};

export default Episodes;
