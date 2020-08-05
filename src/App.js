import React from 'react';
import './App.scss';
import Menu from './components/Menu/Menu'
import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'
import routes from './routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const showPages = routes => {
    let result = null
    if (routes.length > 0) {
      result = routes.map((page, index) => {
        return (<Route path={page.path} exact={page.exact} component={page.main} key={index} />)
      })
    }
    return result
  }


  return (
    <Router>
      <HeaderContainer />
      <Switch>
        {showPages(routes)}
      </Switch>
    </Router>
  );
}

export default App;
