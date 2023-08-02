import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about';
import Welcome from './components/Welcome/Welcome';

function App(): JSX.Element {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <Welcome />
          <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </header>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
