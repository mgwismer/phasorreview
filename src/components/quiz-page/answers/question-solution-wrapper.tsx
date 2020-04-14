import React, { useMemo } from 'react';
import { QuestionOneSolution } from './question-one-answer';
import { QuestionOneReviewPage } from './question-one-review-page';
import { QuestionTwoReviewPage } from './question-two-review';
import { QuestionTwoSolution } from './question-two-answer';
import { QuestionThreeReviewPage } from './question-three-review';
import { QuestionThreeSolution } from './question-three-answer';

type OwnProps = {
    correctAnswer: number;
    answerSubmitted: number;
    questionNumber: number;
}

export const QuizSolution: React.FC<OwnProps> = ({ correctAnswer, answerSubmitted, questionNumber }) => {
    const correctAnswerFlag = correctAnswer === answerSubmitted;
    
    const PageToDisplay = useMemo(() => {
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
        if (questionNumber === 2) {
            return correctAnswerFlag
                ? <QuestionThreeReviewPage />
                : <QuestionThreeSolution />
        } 
    }, [correctAnswer])

    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}