import React, { useState, useCallback } from 'react';
import Parser from "html-react-parser";
import { quizQuestionType } from './quiz-question-type';
import '../Buttons/reply-button';
import './quiz-page.scss';

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
        <div className='quiz-page'>
            <div className='quiz-page-title'>{title} </div>
            <div className='quiz-page-text'>{Parser(text)}</div>
            <div className='quiz-page-image'>
                <img src={image} alt='question' />
            </div>
            <div className='quiz-page-text'>{Parser(question)}</div>
            <div className='quiz-page-text'>
                {answerChoices.map((choice, index) => 
                    <div className='quiz-page-answer'>
                        <label>
                            <input 
                                type='radio'  
                                value={index}
                                name='choice'
                                checked={+selectedAnswer === index}
                                onChange={handleChange}
                            />
                            {(questionAnswerType === 'string') && Parser(choice)}
                            {(questionAnswerType === 'image') &&
                                <img src={choice} alt='potential answer'/>}
                        </label>
                    </div>
                )}
            </div>
                {(selectedAnswer !== 100) && 
                    <button className='reply-button quiz-page-reply-button' value='SUBMIT' onClick={handleSubmit}> SUBMIT </button>}
        </div>
    )
}