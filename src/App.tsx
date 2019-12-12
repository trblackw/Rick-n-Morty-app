import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Episode from './components/views/Episode';
import Nav from './components/elements/Nav';
import Loading from './components/elements/Loading';
import Episodes from './components/views/Episodes';
const Favorites = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Favorites'));
const Characters = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Characters'));
const Locations = lazy<React.FC<{}>>((): Promise<{
   default: React.FC<{}>;
}> => import('./components/views/Locations'));

const App = () => (
   <Fragment>
      <Router>
         <Nav />
         <Switch>
            <Suspense fallback={<Loading />}>
               <Route exact path='/' component={Characters} />
               <Route path='/episode/:id' component={Episode} />
               <Route path='/favorites' component={Favorites} />
               {/* <Route path='/characters' component={Characters} /> */}
               <Route path='/locations' component={Locations} />
            </Suspense>
         </Switch>
      </Router>
   </Fragment>
);

export default App;
