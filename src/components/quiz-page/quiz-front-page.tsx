import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { quizQuestions } from './QuizQuestions';
import { QuizPage } from './quiz-page';
import { AppState, ReduxBaseAction } from '../../redux/reducer';
import { increaseQuestionIndex } from '../../redux/actions';

export const QuizFrontPage: React.FC<QuestionProps> = ({
    questionIndex,
    increaseQuestionIndex,
}) => {

    return (
        <QuizPage quizQuestion={quizQuestions[questionIndex]} setIndex={increaseQuestionIndex}/>
    )
}

const mapStateToProps = (state: AppState) => ({
    questionIndex: state.questionIndex
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxBaseAction>) =>
    bindActionCreators({ increaseQuestionIndex }, dispatch);

type QuestionProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizFrontPage)