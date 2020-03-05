export const PageType = {
    PARAGRAPH: "PARAGRAPH",
}

export const reviewData = {
    pageOne: {
        title: "What is a phasor?",
        subTitle: "Simply a complex number",
        type: PageType.PARAGRAPH,
        content: [
            { 
                text: "A phasor is a complex number that represents the magnitude and phase of a sinusoid. It is the transformed version of a sinusoidal voltage or current waveform.",
            },
        ],
    },
    pageTwo: {
        title: "It\'s a what",
        subTitle: "",
        type: PageType.PARAGRAPH,
        content: [
            {
                text: "It\'s a transformation, right? Phasors transform sinusoidal function problems from the time domain to the frequency domain. So, do you remember how to write a phasor?",
            },
        ],
    }
}