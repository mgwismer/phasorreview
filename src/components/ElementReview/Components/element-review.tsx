import React, { useState, useMemo, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, ReduxBaseAction } from '../../../redux/reducer';
import { ResistorReviewPage } from './resistor-review-page';
import { CapacitorReviewPage } from './capacitor-review-page';
import { InductorReviewPage } from './inductor-review-page';
import { HomeBackForwardBtns } from '../../Buttons/home-back-forward-btn';
import ReviewChart from '../../../assets/images/review5-1.gif';
import { increaseQuestionIndex, resetQuestionIndex } from '../../../redux/actions';
import { pageLinkTypes } from '../../front-page/front-page-data-type';
import { Redirect } from 'react-router';

export const ReviewPageTypes = {
    REVIEW: 'REVIEW',
    RESISTOR: 'RESISTORREVIEW',
    CAPACITOR: 'CAPACITORREVIEW',
    INDUCTOR: 'INDUCTORREVIEW',
}

const ElementReview: React.FC<ElementReviewProps> = ({ 
    questionIndex,
    quizStarted,
    increaseQuestionIndex,
 }) => {
    const [reviewPageType, setReviewPageType] = useState(ReviewPageTypes.REVIEW);
    const [goToQuizPage, setGoToQuizPage] = useState(false);

    const handlePreviousPageClicked = useCallback(() => {
        console.log('wait');
    }, []);

    const goToNextQuizQuestion = useCallback(() => {
        increaseQuestionIndex()
        setGoToQuizPage(true);
    }, [])

    const handleNextPageClicked = useCallback(() => {
        if (reviewPageType === ReviewPageTypes.REVIEW) {
            setReviewPageType(ReviewPageTypes.RESISTOR);
        } else if(reviewPageType === ReviewPageTypes.RESISTOR) {
            setReviewPageType(ReviewPageTypes.CAPACITOR); 
        } else if(reviewPageType === ReviewPageTypes.CAPACITOR) {
            setReviewPageType(ReviewPageTypes.INDUCTOR);
        } else {
            setReviewPageType(ReviewPageTypes.REVIEW);
        }
    }, [reviewPageType]);

    const currentContent = useMemo(() => {
        if (reviewPageType === ReviewPageTypes.REVIEW) {
            return (
                <React.Fragment>
                    <div>
                        <img src={ReviewChart} alt='review chart' />
                        <div onClick={() => setReviewPageType(ReviewPageTypes.RESISTOR)}> Phasor review for resistors </div>
                    </div>
                </React.Fragment>
            )
        } else if (reviewPageType === ReviewPageTypes.RESISTOR) 
            return <ResistorReviewPage />
        else if (reviewPageType === ReviewPageTypes.CAPACITOR) 
            return <CapacitorReviewPage />
        else if (reviewPageType === ReviewPageTypes.INDUCTOR) 
            return <InductorReviewPage />
        }, [reviewPageType])

    if (goToQuizPage) {
        return <Redirect to={pageLinkTypes.QUIZ} />
    }
    return (
        <div>
            {currentContent}
            {(questionIndex === 0) && 
                <HomeBackForwardBtns
                    handlePreviousPageClicked={handlePreviousPageClicked}
                    handleNextPageClicked={handleNextPageClicked}
                /> 
            }
            {(quizStarted) &&
                <div>
                    <button className='element-review-button' onClick={goToNextQuizQuestion} >
                        Are you ready for next quiz question?
                    </button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    questionIndex: state.questionIndex,
    quizStarted: state.quizStarted,
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxBaseAction>) =>
    bindActionCreators({ resetQuestionIndex, increaseQuestionIndex }, dispatch);

type ElementReviewProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementReview)