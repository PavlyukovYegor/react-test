import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import DisplayArtists from './components/displayArtistsComponent.js';
import DescriptionArtist from './components/descriptionArtistComponent.js';
import AddArtist from './components/addArtistComponent.js';

render(
  <Router history={browserHistory}>
    <Route path='/' component={DisplayArtists}/>
      <Route path="/edit(/:id)">
    </Route>
    <Route path='artist/:id' component={DescriptionArtist}/>
</Router>,
  document.getElementById('root')
)
