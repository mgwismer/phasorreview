import React, { useMemo } from 'react';
import { QuestionOneSolution } from './question-one-answer';
import { QuestionOneReviewPage } from './question-one-review-page';
import { QuestionTwoReviewPage } from './question-two-review';
import { QuestionTwoSolution } from './question-two-answer';
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
        if (questionNumber === 0) {
            return correctAnswerFlag
                ? <QuestionOneReviewPage />
                : <QuestionOneSolution correctAnswer={correctAnswerFlag} />
        } 
        if (questionNumber === 1) {
            return correctAnswerFlag
                ? <QuestionTwoReviewPage />
                : <QuestionTwoSolution />
        } 

    }, [correctAnswer])

    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}