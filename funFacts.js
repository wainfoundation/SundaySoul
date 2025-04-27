// funFacts.js
const funFacts = [
    "Fun fact: People feeling lonely often need a hug!",
    "Fun fact: Smiling, even when forced, can lift your mood!",
    "Fun fact: A 5-minute meditation can reduce stress instantly!",
    "Fun fact: Listening to music can ease anxiety in minutes!",
    "Fun fact: Deep breathing lowers your heart rate and calms your mind!",
    "Fun fact: Sharing a kind word can spark someone’s hope!",
    "Fun fact: Nature walks boost your mood and creativity!",
    "Fun fact: Journaling daily helps process emotions better!",
    "Fun fact: A good night’s sleep improves emotional resilience!",
    "Fun fact: Connecting with others reduces feelings of loneliness!",
    "Fun fact: Gratitude lists can shift your mindset to joy!",
    "Fun fact: Laughter releases feel-good chemicals in your brain!",
    "Fun fact: Drinking enough water helps with mental clarity!",
    "Fun fact: Stretching releases tension stored in your body!",
    "Fun fact: Sunlight helps your brain produce serotonin!",
    "Fun fact: Doing something creative can calm your nervous system!",
    "Fun fact: Acts of kindness increase your own happiness too!",
    "Fun fact: Holding a warm drink can make you feel emotionally warmer!",
    "Fun fact: Even short bursts of exercise can lift your mood!",
    "Fun fact: Talking about your feelings helps you process them!",
    "Fun fact: Green spaces are linked to lower stress levels!",
    "Fun fact: Smelling lavender may reduce anxiety and improve sleep!",
    "Fun fact: Physical touch boosts oxytocin — the bonding hormone!",
    "Fun fact: Breathing in for 4 seconds, out for 8 calms the body!",
    "Fun fact: Pets can improve emotional well-being and reduce stress!",
    "Fun fact: Visualization exercises can reduce anxiety!",
    "Fun fact: Saying 'thank you' regularly can rewire your brain!",
    "Fun fact: Setting small goals gives a sense of achievement!",
    "Fun fact: Positive self-talk can improve confidence over time!",
    "Fun fact: Coloring or doodling can lower cortisol levels!"
];

// Remove duplicates by converting to Set and back to array
const uniqueFunFacts = [...new Set(funFacts)];

function displayFunFact(elementId, options = { forceNew: false }) {
    try {
        // Validate element
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with ID "${elementId}" not found.`);
            return;
        }

        // Check sessionStorage availability
        let fact;
        if (options.forceNew || !isSessionStorageAvailable()) {
            fact = uniqueFunFacts[Math.floor(Math.random() * uniqueFunFacts.length)];
            if (isSessionStorageAvailable()) {
                sessionStorage.setItem('currentFunFact', fact);
            }
        } else {
            fact = sessionStorage.getItem('currentFunFact');
            if (!fact) {
                fact = uniqueFunFacts[Math.floor(Math.random() * uniqueFunFacts.length)];
                sessionStorage.setItem('currentFunFact', fact);
            }
        }

        // Update element with accessibility in mind
        element.textContent = fact;
        element.setAttribute('aria-live', 'polite');
    } catch (error) {
        console.error('Error in displayFunFact:', error);
    }
}

// Helper function to check sessionStorage availability
function isSessionStorageAvailable() {
    try {
        const testKey = '__test__';
        sessionStorage.setItem(testKey, testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

export { displayFunFact };
