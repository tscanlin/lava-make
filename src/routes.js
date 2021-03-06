import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
// import debug from 'debug';

import Layout from './Layout'
import Layout2 from './Layout2'
// import Homepage from './containers/Homepage/Homepage';
// import Game from './containers/Game/Game';
// import NotFound from './containers/NotFound/NotFound';

// debug('lego:routes');

const siteTitle = 'React Lego'

export const routes = {
  homepage: {
    path: '/',
    label: 'About React Lego',
    title: `${siteTitle} - About React Lego`,
    component: Layout
  },
  game: {
    path: 'game',
    label: 'Star Wars Trivia',
    title: `${siteTitle} - Star Wars Trivia`,
    component: Layout2
  },
  notFound: {
    path: '*', // path * will return a 404
    title: `${siteTitle} - Page Not Found`,
    component: Layout
  }
}

const indexRoute = (route) => Object.assign({}, route, { path: null })

export const LinkHelper = ({ to, ...props }) => {
  if (!routes[to]) throw new Error(`Route to '${to}' not found`)
  return (
    <Link to={ routes[to].path } { ...props }>
      { props.children || routes[to].label }
    </Link>
  )
}

export function makeRoutes() {
  return (
    <Route path="/" component={ Layout }>
      <IndexRoute { ...indexRoute(routes.homepage) } />
      <Route { ...routes.game } />
      <Route { ...routes.notFound } />
    </Route>
  )
}
