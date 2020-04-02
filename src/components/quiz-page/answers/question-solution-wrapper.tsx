import React, { useMemo } from 'react';
import { QuestionOneSolution } from './question-one-answer';
import { QuestionOneReviewPage } from './question-one-review-page';
import { pageLinkTypes } from '../../front-page/front-page-data-type';
import { Redirect } from 'react-router';
type OwnProps = {
    correctAnswer: number;
    answerSubmitted: number;
    questionNumber: number;
}
export const QuizSolution: React.FC<OwnProps> = ({ correctAnswer, answerSubmitted, questionNumber }) => {
    const correctAnswerFlag = correctAnswer === answerSubmitted;
    console.log('quiz solution',  questionNumber, correctAnswerFlag)
    const PageToDisplay = useMemo(() => {
        console.log('correct answer', correctAnswer, questionNumber);
        return correctAnswerFlag
            ? <QuestionOneReviewPage />
            : <QuestionOneSolution correctAnswer={correctAnswerFlag} />
    }, [correctAnswer])

    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}