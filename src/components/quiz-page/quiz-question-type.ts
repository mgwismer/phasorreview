export type quizQuestionType = {
    title: string;
    text: string;
    question: string;
    image: string;
    questionAnswerType: string;
    answerChoices: Array<string>;
    correctAnswer: number;
}

export type quizQuestionsType = Array<quizQuestionType>;