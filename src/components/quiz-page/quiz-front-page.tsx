import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { quizQuestions } from './QuizQuestions';
import { QuizPage } from './quiz-page';
import { AppState, ReduxBaseAction } from '../../redux/reducer';
import { setQuizStart } from '../../redux/actions';
import { QuizSolution } from './answers/question-solution-wrapper';

const QuizFrontPage: React.FC<QuestionProps> = ({
    questionIndex,
    setQuizStart
}) => {

    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [answerIndex, setAnswerIndex] = useState(100);

    let correctAnswer = quizQuestions[questionIndex].correctAnswer;
    useEffect(() => {
        setQuizStart()
    }, []);

    const handleAnswerSubmit = useCallback(answerChoice => {
        setAnswerSubmitted(true);
        setAnswerIndex(answerChoice)
    },[quizQuestions])

    const PageToDisplay = useMemo(() => {
        console.log('in memo correct answer', correctAnswer, questionIndex);
        return answerSubmitted 
            ? <QuizSolution answerSubmitted={+answerIndex} correctAnswer={correctAnswer} questionNumber={questionIndex}/> 
            : 
            <QuizPage 
                quizQuestion={quizQuestions[questionIndex]}
                handleAnswerSubmit={handleAnswerSubmit}
            />
    }, [answerSubmitted, correctAnswer])
    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}

const mapStateToProps = (state: AppState) => ({
        questionIndex: state.questionIndex
    });

const mapDispatchToProps = (dispatch: Dispatch<ReduxBaseAction>) =>
    bindActionCreators({ setQuizStart }, dispatch);

type QuestionProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuizFrontPage)