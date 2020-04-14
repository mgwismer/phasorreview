import React, { useState, useMemo, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { AppState, ReduxActions } from '../../../redux/reducer';
import { ResistorReviewPage } from './resistor-review-page';
import { CapacitorReviewPage } from './capacitor-review-page';
import { InductorReviewPage } from './inductor-review-page';
import { HomeBackForwardBtns } from '../../Buttons/home-back-forward-btn';
import ReviewChart from '../../../assets/images/review5-1.gif';
import { increaseQuestionIndex, resetQuestionIndex, setAnswerSubmitted } from '../../../redux/actions';
import { pageLinkTypes } from '../../front-page/front-page-data-type';
import { ReplyButton } from '../../Buttons/reply-button';
import { frontPagePathTypes } from '../../front-page/front-page-data-type';


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
    setAnswerSubmitted,
 }) => {
    const [reviewPageType, setReviewPageType] = useState(ReviewPageTypes.REVIEW);
    const [goToQuizPage, setGoToQuizPage] = useState(false);

    const goToNextQuizQuestion = useCallback(() => {
        increaseQuestionIndex();
        setAnswerSubmitted(false);
        setGoToQuizPage(true);
    }, [])

    const history = useHistory();

    const buttonText = useMemo(() => {
        if (quizStarted)
            return 'YES';
        else
            return 'CONTINUE';
    }, [quizStarted]);

    const handlePreviousPageClicked = useCallback(() => {
        if (reviewPageType === ReviewPageTypes.REVIEW) {
            history.goBack();
        } else if(reviewPageType === ReviewPageTypes.RESISTOR) {
            setReviewPageType(ReviewPageTypes.REVIEW); 
        } else if(reviewPageType === ReviewPageTypes.CAPACITOR) {
            setReviewPageType(ReviewPageTypes.RESISTOR);
        } else {
            setReviewPageType(ReviewPageTypes.CAPACITOR);
        }
    }, [reviewPageType])
    
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
                        <h2>Review on component laws with phasors</h2>
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
            <div>
                <ReplyButton mainText={buttonText} buttonSubText="I'll try another quiz question" buttonType={frontPagePathTypes.NEWPAGE} buttonAction={goToNextQuizQuestion} />
            </div>

            {(questionIndex === 0) && 
                <HomeBackForwardBtns
                    handlePreviousPageClicked={handlePreviousPageClicked}
                    handleNextPageClicked={handleNextPageClicked}
                /> 
            }
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    questionIndex: state.questionIndex,
    quizStarted: state.quizStarted,
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) =>
    bindActionCreators({ resetQuestionIndex, increaseQuestionIndex, setAnswerSubmitted }, dispatch);

type ElementReviewProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementReview)