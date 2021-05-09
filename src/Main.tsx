import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Books from './pages/Books';
import Links from './pages/Links';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' children={About}></Route>
      <Route exact path='/about' children={About} ></Route>
      <Route exact path="/books" children={Books}></Route>
      <Route exact path="/links" children={Links}></Route>
    </Switch>
  );
}

export default Main;