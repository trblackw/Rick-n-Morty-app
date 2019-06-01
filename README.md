This is essentially a tutorial/pet project that got a bit out of hand because for one, I'm an avid Rick and Morty fan and two, I kept stumbling across various Rick and Morty APIs, each of which provided a unique set of data to expand and build upon. In this project, I make use of three (keyless/totally open) APIs to fetch and render Rick and Morty-related data:

-----------------------------------------------------------------------------------------------------------------------------

1) **https://rickandmortyapi.com/** (an open-source initiative from which the bulk of the character, episode & location data is derived -- cudos to Axel Furhmann -> https://axelfuhrmann.com/)
2) **http://loremricksum.com/** (for generating random quotes on the landing page via Landing.tsx)
3) **https://www.tvmaze.com/api** (specifically 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty' for some general show info)

-----------------------------------------------------------------------------------------------------------------------------

To get it up and running, all you need to do is:
1) `git clone git@github.com:trblackw/Rick-n-Morty-app.git`;
2) `cd rick-and-morty-episode-picker`
3) `yarn; yarn start` || `npm i; npm start`
