import { tableReviewType } from "../Components/review-table-data";
import CapacitorGraphVI from '../../../assets/images/phasor12_graph.gif';
import { ejwt, ejtheta, ejbeta } from '../../../constants/expressions';

export const capacitorTableData: tableReviewType = {
    tableSteps: 
        [
            {
                text: 'The voltage current relationship in the time domain is',
                equation: 'i(t) = C frac{dv(t)}{dt}'
            },
            {
                text: 'As with the resistor the steady state voltage can be written as',
                equation: 'v(t) = Re {V_m e^(j(omega t + phi))}'
            },
            {
                text: 'And the current is in the form',
                equation: 'i(t) = Re {I_m e^(j(omega t + beta))}'
            },
            {
                text: 'Substituting the expressions for v and i into the capacitor equation, i(t) = C dv/dt while suppressing the Re notation',
                equation: 'I_m e^(j(omega t + beta)) = C frac{d}{dt}\(V_m e^(j(omega t + phi)) \)'
            },
            {
                text: 'Taking the derivative yields',
                equation: 'I_m e^(j omega t) e^(j beta) = j omega C V_m e^(jomega t)  e^(j phi)'
            },
            {
                text: `Suppressing $`,
                equation: 'I_m e^(j beta) = j omega C V_m e^(j phi)'
            },
            {
                text: `Since j=e<sup>j90</sup>`,
                equation: 'I_m e^(j beta) = omega C V_m e^(j90) e^(j phi) = omega C V_m e^(j(phi+90))'
            },
            {
                text: `Proving that i(t) leads v(t) by 90 degrees`,
                equation: 'beta = phi+90',
            },
            {
                text: `Defining phasors V&#770<sub>m</sub> = V<sub>m</sub>${ejtheta} and <span>I&#770;<sub>m</sub></span> = I<sub>m</sub>${ejbeta}`,
                equation: 'hat{I}_m = j omega C hat{V}_m or hat{V}_m = -j frac{1}{omega C} hat{I}_m'
            }
        ],
        tableEnd: {
            text: 'Therefore the current leads (peaks before) the voltage in a capacitor by 90 degrees',
            figure: `${CapacitorGraphVI}`,
        },
    }
