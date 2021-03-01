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
        <div className="apod-link">
          <p>&copy; 2021 Zac Olds</p>
          <a href="https://apod.nasa.gov/apod/">Background Image by NASA APOD</a>
        </div>
      </Layout>
    </div>
  );
}

export default App;
