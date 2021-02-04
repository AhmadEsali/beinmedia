import { Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Shop from 'views/Shop';
import Courses from 'views/Courses';
import Broadcast from 'views/Broadcast';

const routes = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/shop' component={Shop} exact />
    <Route path='/courses' component={Courses} exact />
    <Route path='/broadcast' component={Broadcast} exact />
    <Route path='/book' component={Home} exact />
  </Switch>
);

export default routes;
