import React from 'react';
import About from './about';
import Home from './home';
import Team from './team';
import Services from './services';
import Contact from'./contact';
import {Route, Switch} from'react-router-dom';


const Main = () => (
<div className="switch col-11">
<Switch>
    <Route exact  path="/"          component={Home}></Route>
    <Route        path="/about"     component={About}></Route>
    <Route        path="/team"      component={Team}></Route>
    <Route        path="/services"  component={Services}></Route>
    <Route        path="/contact"   component={Contact}></Route>
</Switch>
</div>

    )

export default Main;