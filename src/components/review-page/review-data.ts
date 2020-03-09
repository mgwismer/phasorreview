export const PageType = {
    PARAGRAPH: "PARAGRAPH",
    LIST: "LIST",
}

export const reviewData = [
    {
        title: "What is a phasor?",
        subTitle: "Simply a complex number",
        type: PageType.PARAGRAPH,
        content: [
            { 
                text: "A phasor is a complex number that represents the magnitude and phase of a sinusoid. It is the transformed version of a sinusoidal voltage or current waveform.",
            },
        ],
    },
    {
        title: "It\'s a what",
        subTitle: "",
        type: PageType.PARAGRAPH,
        content: [
            {
                text: "It\'s a transformation, right? Phasors transform sinusoidal function problems from the time domain to the frequency domain.",
            },
        ],
    },
    {
        title: "How does one write a phasor?",
        subTitle: "Four easy steps",
        type: PageType.LIST,
        content: [
            {
                text: "Write y(t) in the time domain as a cosine waveform with a phase angle.",
                equation: "y(t)=Y_m \cos(/omega t + /phi)",
            },
            {
                text: "Using Euler\'s formula, write y(t) as the real part of the complex quantity.",
                // Note if the link value exists then clicking on this goes to next step where not 
                // not clicking on the link skips the next page. 
                link: "Review Euler",
                equation: "y(t) = Re{Y_m e^(j /omega t) e^(j /phi t)} = Re{Y_m e^(j /omega t + /phi t)}",
            }
        ],
    }
]