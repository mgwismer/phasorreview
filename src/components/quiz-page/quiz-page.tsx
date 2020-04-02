import React, { useState, useCallback } from 'react';
import Parser from "html-react-parser";
import { quizQuestionType } from './quiz-question-type';

type OwnProps = {
    quizQuestion: quizQuestionType;
    handleAnswerSubmit: (answer: number) => void;
}
export const QuizPage: React.FC<OwnProps> = ({ quizQuestion, handleAnswerSubmit }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(100)
    const { title, text, question, image, questionAnswerType, answerChoices } = quizQuestion;

    const handleChange = useCallback(event => {
        setSelectedAnswer(event.target.value);
    }, [])

    const handleSubmit = useCallback(() => {
        handleAnswerSubmit(selectedAnswer);
    }, [selectedAnswer, handleAnswerSubmit]);

    return (
        <div>
            <div>{title}</div>
            <div>{Parser(text)}</div>
            <img src={image} alt='question image' />
            <div>{Parser(question)}</div>
                <div>
                    {answerChoices.map((choice, index) => 
                        <div>
                            <label>
                                <input 
                                    type='radio'  
                                    value={index}
                                    name='choice'
                                    checked={+selectedAnswer === index}
                                    onChange={handleChange}
                                />
                                {choice}
                            </label>
                        </div>
                    )}
                </div>
                {(selectedAnswer !== 100) && 
                    <button value='SUBMIT' onClick={handleSubmit}> SUBMIT </button>}
        </div>
    )
}