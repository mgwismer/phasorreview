import React, { useState } from 'react';
import { quizQuestions } from './QuizQuestions';
import { QuizPage } from './quiz-page';

export const QuizFrontPage: React.FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <QuizPage quizQuestion={quizQuestions[questionIndex]} />
    )
}