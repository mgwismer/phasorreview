
export type tableReviewRow = {
    text: string;
    equation: string;
}

export type tableReviewType = {
    tableSteps: Array<tableReviewRow>,
    tableEnd: {
        text: string;
        figure: string;
    }
}