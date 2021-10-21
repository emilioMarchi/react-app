import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home'
import Contact from './views/Contact/Contact';

import Header from './components/Header/Header';
import ItemDetail from './components/ItemDetail/ItemDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/detail/:id' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
