import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import './App.scss';
import { FrontPage } from './components/front-page/front-page';
import { QuizFrontPage } from './components/quiz-page/quiz-front-page';
import { TutorialFrontPage } from './components/tutorial-page/tutorial-front-page';
import { ElementReview } from './components/ElementReview/Components/element-review';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={'/'} component={FrontPage} />
        <Route path={'/review'} component={TutorialFrontPage} />
        <Route path={'/quiz'} component={QuizFrontPage} />
        <Route path={'/elementreview'} component={ElementReview} />
      </Router>
    </div>
  );
}

export default App;
