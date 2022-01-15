// import logo from './logo.svg';
import './App.css';
import { NasaApp } from './view/NasaApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { paths } from './utils/constants';
import { Home } from './view/Home';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path={paths.HOME} exact component={Home} />
          <Route path={paths.BROWSE} exact component={NasaApp} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
