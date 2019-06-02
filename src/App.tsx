import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Episode from './components/views/Episode';
import Nav from './components/elements/Nav';
import Loading from './components/elements/Loading';
import Landing from './components/views/Landing';
const Favorites = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Favorites'));
const Characters = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Characters'));
const Episodes = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Episodes'));

const App = () => (
   <Fragment>
      <Router>
         <Nav />
         <Switch>
            <Suspense fallback={<Loading />}>
               <Route exact path='/' component={Landing} />
               <Route path='/episodes' component={Episodes} />
               <Route path='/episode/:id' component={Episode} />
               <Route path='/favorites' component={Favorites} />
               <Route path='/characters' component={Characters} />
            </Suspense>
         </Switch>
      </Router>
   </Fragment>
);

export default App;
