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
import { pageLinkTypes } from './components/front-page/front-page-data-type';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={'/frontpage:subpath'} component={FrontPage} />
        <Route exact path={'/'} component={FrontPage} />
        <Route exact path={pageLinkTypes.TUTORIAL} component={TutorialFrontPage} />
        <Route exact path={pageLinkTypes.QUIZ} component={QuizFrontPage} />
        <Route path={pageLinkTypes.REVIEW} component={ElementReview} />
      </Router>
    </div>
  );
}

export default App;
