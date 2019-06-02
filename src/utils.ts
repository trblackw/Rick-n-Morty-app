export const formatEpisode = (title: string): string => {
   let [season, episode] = title.split(/e\d/i);
   return `${season.split('')[season.length - 1]} - Episode ${episode}`;
};

export const formatTimeStamp = (stamp: string): string => `${new Date(stamp).toDateString().split(' ').slice(1).join(' ')}`