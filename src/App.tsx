import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Episodes from './components/Episodes';
import Episode from './components/Episode';
import Nav from './components/Nav';
const Favorites = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/Favorites'));
const Characters = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/Characters'));

const App = () => (
   <Fragment>
      <Router>
         <Nav />
         <Switch>
            <Suspense fallback={<div>Loading...</div>}>
               <Route exact path='/' component={Episodes} />
               <Route path='/episode/:id' component={Episode} />
               <Route path='/favorites' component={Favorites} />
               <Route path='/characters' component={Characters} />
            </Suspense>
         </Switch>
      </Router>
   </Fragment>
);

export default App;
