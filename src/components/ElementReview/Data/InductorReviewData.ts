import { tableReviewType } from "../Components/review-table-data";
import InductorGraphVI from '../../../assets/images/phasor11_graph.gif';
import { ejwt, ejbeta, ejtheta } from "../../../constants/expressions";

export const inductorTableData: tableReviewType = {
    tableSteps:
        [
            {
                text: 'The voltage current relationship in the time domain is',
                equation: 'v(t) = L frac{di(t)}{dt}'
            },
            {
                text: 'As with the resistor and capacitor the steady state voltage can be written as',
                equation: 'v(t) = Re {V_m e^(j(omega t + phi))}'
            },
            {
                text: 'And the current is in the form',
                equation: 'i(t) = Re {I_m e^(j(omega t + beta))}'
            },
            {
                text: 'Substituting the expressions for v and i into the inductor equation, v(t) = L di/dt while suppressing the Re notation',
                equation: 'V_m e^(j(omega t + phi)) = L frac{d}{dt}\(I_m e^(j(omega t + beta)) \)'
            },
            {
                text: 'Taking the derivative yields',
                equation: 'V_m e^(j omega t) e^(j phi) = j omega L I_m e^(jomega t)  e^(j beta)'
            },
            {
                text: `Suppressing ${ejwt}`,
                equation: 'V_m e^(j phi) = j omega L I_m e^(j beta)'
            },
            {
                text: `Since j=e<sup>j90</sup>`,
                equation: 'V_m e^(j phi) = omega L I_m e^(j90) e^(j beta) = omega L I_m e^(j(beta+90))'
            },
            {
                text: `Proving that v(t) leads i(t) by 90 degrees`,
                equation: 'phi = beta+90',
            },
            {
                text: `Defining phasors <span>V&#770;<sub>m</sub></span> = V<sub>m</sub>${ejtheta} and <span>I&#770;<sub>m</sub></span> = I<sub>m</sub>${ejbeta}`,
                equation: 'hat{V}_m = j omega L hat{I}_m or hat{V}_m'
            }
        ],
        tableEnd: {
            text: 'Therefore the voltage leads (peaks before) the current in an inductor by 90 degrees.',
            figure: `${InductorGraphVI}`
        }
    }
