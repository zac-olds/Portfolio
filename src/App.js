// COMPONENTS
import Layout from './layouts/Layout';
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Projects from './screens/Projects';
// import Fun from './screens/Fun';

// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
