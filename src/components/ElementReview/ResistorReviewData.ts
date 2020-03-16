export const resistorTableData = [
    {
        text: 'The voltage current relationship in the time domain is',
        equation: 'v(t)=i(t)R'
    },
    {
        text: 'The steady state voltage is given by',
        equation: 'v(t)=V_m cos(omega t + phi)'
    },
    {
        text: 'Taking the real part	',
        equation: 'v(t) = Re {V_m e^(j(omega t + phi))}'
    },
    {
        text: 'Assume the current source is in the form',
        equation: 'i(t) = Re {I_m e^(j(omega t + beta))}'
    },
    {
        text: 'Substituting the expressions for v and i into Ohm\'s Law and dropping the real notation',
        equation: 'V_m e^(j(omega t + theta)) = R I_m e^(j(omega t + beta))'
    },
    {
        text: 'Suppressing ',
        equation: 'V_m e^(j theta) = R I_m e^(j beta)'
    },
]
