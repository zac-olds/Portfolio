// DEPENDENCIES
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './layouts/Layout';
import Contact from './screens/Contact';
import About from './screens/About';
import Projects from './screens/Projects';
import Fun from './screens/Fun';

// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/fun'>
            <Fun />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
