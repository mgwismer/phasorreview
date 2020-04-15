import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { quizQuestions } from './QuizQuestions';
import { QuizPage } from './quiz-page';
import { AppState, ReduxActions } from '../../redux/reducer';
import { setQuizStart, setAnswerSubmitted } from '../../redux/actions';
import { QuizSolution } from './answers/question-solution-wrapper';

const QuizFrontPage: React.FC<QuestionProps> = ({
    questionIndex,
    answerSubmittedFlag,
    setQuizStart,
    setAnswerSubmitted,
}) => {
    const [answerIndex, setAnswerIndex] = useState(100);

    let correctAnswer = quizQuestions[questionIndex].correctAnswer;
    useEffect(() => {
        setQuizStart(true)
    }, [setQuizStart]);

    const handleAnswerSubmit = useCallback(answerChoice => {
        setAnswerSubmitted(true);
        setAnswerIndex(answerChoice)
    },[setAnswerSubmitted])

    const PageToDisplay = useMemo(() => {
        if (questionIndex < quizQuestions.length) {
            return answerSubmittedFlag 
                ? <QuizSolution answerSubmitted={+answerIndex} correctAnswer={correctAnswer} questionNumber={questionIndex}/> 
                : 
                <QuizPage 
                    quizQuestion={quizQuestions[questionIndex]}
                    handleAnswerSubmit={handleAnswerSubmit}
                />
        }
    }, [answerSubmittedFlag, correctAnswer, answerIndex, handleAnswerSubmit, questionIndex])

    if (!(questionIndex < quizQuestions.length)) {
        return <Redirect to={'/'} />
    }
    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}

const mapStateToProps = (state: AppState) => ({
        questionIndex: state.questionIndex,
        answerSubmittedFlag: state.answerSubmittedFlag,
    });

const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) =>
    bindActionCreators({ setQuizStart, setAnswerSubmitted }, dispatch);

type QuestionProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuizFrontPage)