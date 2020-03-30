import React, { useState, useCallback } from 'react';
import Parser from "html-react-parser";
import { quizQuestionType } from './quiz-question-type';

type OwnProps = {
    quizQuestion: quizQuestionType;
}
export const QuizPage: React.FC<OwnProps> = ({ quizQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(100)
    const { title, text, question, image, questionAnswerType, answerChoices } = quizQuestion;

    const handleChange = useCallback(event => {
        setSelectedAnswer(event.target.value);
    }, [])

    // const answers = useMemo(() => {
    //     console.log('use memo', selectedAnswer);
    //     return (
    //         <ul>
    //             {answerChoices.map((choice, index) => 
    //                 <li>
    //                     <label>
    //                         <input 
    //                             type='radio'  
    //                             value={index}
    //                             checked={selectedAnswer === index}
    //                             onChange={handleChange}
    //                         />
    //                         {choice}
    //                     </label>
    //                 </li>
    //             )}
    //         </ul>
    //     )
    // },[selectedAnswer])

    return (
        <div>
            <div>{title}</div>
            <div>{Parser(text)}</div>
            <img src={image} alt='question image' />
            <div>{Parser(question)}</div>
                {selectedAnswer}
                <div>
                    {answerChoices.map((choice, index) => 
                        <div>
                            <label>
                                <input 
                                    type='radio'  
                                    value={index}
                                    name='choice'
                                    checked={selectedAnswer === +index}
                                    onChange={handleChange}
                                />
                                {choice}
                            </label>
                        </div>
                    )}
                </div>
        </div>
    )
}