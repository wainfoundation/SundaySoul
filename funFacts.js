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
    "Fun fact: Laughter releases feel-good chemicals in your brain!"
];

function displayFunFact(elementId) {
    let fact = sessionStorage.getItem('currentFunFact');
    if (!fact) {
        fact = funFacts[Math.floor(Math.random() * funFacts.length)];
        sessionStorage.setItem('currentFunFact', fact);
    }
    document.getElementById(elementId).textContent = fact;
}

export { displayFunFact };
