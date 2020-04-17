import { quizQuestionsType } from "./quiz-question-type";
import CircuitProblemImage from '../../assets/images/review3-3.gif';
import InductorTimeTrace from '../../assets/images/review6.gif';
import LRCCircuit from '../../assets/images/diagram1.gif';
import ZeroPhase from '../../assets/images/diagram3.gif';
import BigPhase from '../../assets/images/diagram4.gif';
import PositivePhase from '../../assets/images/diagram2.gif';
import Negative90Phase from '../../assets/images/diagram5.gif';
import TwoVoltageCircuit from '../../assets/images/test1-1.gif';


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
    },
    {
        title: 'The real time trace',
        text: 'The voltage across and current through an element are shown below. Determine if the element is an inductor or capacitor.',
        question: 'Which element does this scope trace belong to?',
        image: InductorTimeTrace,
        questionAnswerType: 'string',
        answerChoices: [
            'inductor',
            'resistor',
            'capacitor'
        ],
        correctAnswer: 0,
    },
    {
        title: 'Phasors graphically',
        text: 'For the circuit below, choose the most accurate phasor diagram representation of Vs.',
        question: 'Select a phasor diagram',
        image: LRCCircuit,
        questionAnswerType: 'image',
        answerChoices: [
            ZeroPhase,
            BigPhase,
            PositivePhase,
            Negative90Phase
        ],
        correctAnswer: 2,
    },
    {
        title: 'Circuit analysis with phasors',
        text: 'For the circuit below, choose the most accurate phasor diagram representation of Vs.',
        question: 'Select the closest voltage',
        image: TwoVoltageCircuit,
        questionAnswerType: 'string',
        answerChoices: [
            `V<sub>L</sub>(t) = 28 cos(300t+47\u00B0)`,
            `V<sub>L</sub>(t) = 28 cos(300t+47\u00B0)`,
            `V<sub>L</sub>(t) = 37 cos(300t-65\u00B0)`,
            `V<sub>L</sub>(t) = 33 cos(300t+82\u00B0)`
        ],
        correctAnswer: 3,
    }
]