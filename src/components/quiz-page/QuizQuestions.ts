import { quizQuestionsType } from "./quiz-question-type";
import CircuitProblemImage from '../../assets/images/review3-3.gif';

export const quizQuestions: quizQuestionsType = [
    {
        title: 'Phasor Review',
        text: `So you remember that if y(t) = Y<sub>m</sub> cos(\u03C9t + \u03B2), then Y&#770<sub>m</sub>=Y<sub>m</sub>e<sup>j\u03B2</sup>=Y<sub>m</sub>\u2220\u03B2. Now try working this example.`,
        question: `Assuming v<sub>s</sub>(t)=10 cos(300t) find i(t)`,
        image: `${CircuitProblemImage}`,
        questionAnswerType: 'string',
        answerChoices: [
            'i(t) = 2.3 cos(300t-68\u00B0)',
            'i(t) = 1.24 cos(300t-68\u00B0)',
            'i(t) = 2.3 cos(300t-33\u00B0)',
            'i(t) = 1.24 cos(300t-33\u00B0)'
        ],
        correctAnswer: 2,
    }
]