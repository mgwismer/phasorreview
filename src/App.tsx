import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import './App.scss';
import { FrontPage } from './components/front-page/front-page';
import { QuizFrontPage } from './components/quiz-page/quiz-front-page';
import { ReviewFrontPage } from './components/review-page/review-front-page';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/'} component={FrontPage} />
        <Route path={'/review'} component={ReviewFrontPage} />
        <Route path={'/quiz'} component={QuizFrontPage} />
      </Router>
    </div>
  );
}

export default App;
