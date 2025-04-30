// didYouKnow.js
const didYouKnowFacts = [
    "Did you know? Regular meditation can physically alter brain regions associated with memory, stress, and empathy.",
    "Did you know? Smiling activates neural messaging that benefits your health and happiness.",
    "Did you know? Just 10 minutes of walking in nature can reduce anxiety and improve mood.",
    "Did you know? Deep breathing increases oxygen flow, calming the brain and body.",
    "Did you know? Expressing gratitude regularly can rewire your brain for positivity.",
    "Did you know? Physical touch like hugging releases oxytocin, the 'love hormone'.",
    "Did you know? Listening to calming music slows down heart rate and reduces cortisol.",
    "Did you know? Journaling your thoughts helps clear mental clutter and reduce stress.",
    "Did you know? Sleep is essential for emotional processing and brain detoxification.",
    "Did you know? Acts of kindness trigger dopamine, increasing your sense of well-being.",
    "Did you know? Laughter boosts immune function and relaxes your whole body.",
    "Did you know? Sunlight helps regulate serotonin, which affects mood and focus.",
    "Did you know? Visualization techniques can enhance performance and reduce anxiety.",
    "Did you know? Holding a warm beverage can make you feel more socially connected.",
    "Did you know? Regular stretching improves circulation and relieves mental tension.",
    "Did you know? Writing down goals boosts motivation and personal accountability.",
    "Did you know? Spending time with pets can lower blood pressure and stress levels.",
    "Did you know? Looking at greenery, even indoors, can reduce mental fatigue.",
    "Did you know? Controlled breathing triggers the parasympathetic nervous system to relax.",
    "Did you know? Meditation increases gray matter density in areas linked to learning and memory."
    "Did you know? Regular meditation can physically alter brain regions associated with memory, stress, and empathy.",
    "Did you know? Smiling boosts dopamine, which can actually make you feel happier.",
    "Did you know? Deep breathing for just one minute can calm your nervous system.",
    "Did you know? A 5-minute nature break can improve focus and reduce anxiety.",
    "Did you know? Gratitude journaling can increase long-term happiness levels.",
    "Did you know? Laughing triggers the release of endorphins, your brain’s feel-good chemicals.",
    "Did you know? Listening to soothing music can reduce cortisol and blood pressure.",
    "Did you know? A warm cup of tea can trigger a calming response in your body.",
    "Did you know? Just one act of kindness a day can boost your overall mood.",
    "Did you know? Watching the sunset can lower stress and enhance feelings of peace.",
    "Did you know? Light stretching in the morning can elevate your energy and mindset.",
    "Did you know? Physical touch, like hugging, helps release oxytocin and reduce stress.",
    "Did you know? Exposure to sunlight helps regulate your sleep and improve your mood.",
    "Did you know? Writing down your thoughts can help manage emotional overwhelm.",
    "Did you know? Visualization exercises can reduce stress and increase confidence.",
    "Did you know? Scented candles can trigger calming signals in the brain.",
    "Did you know? Being around plants improves concentration and reduces mental fatigue.",
    "Did you know? Listening to nature sounds can slow down your heart rate.",
    "Did you know? Practicing mindfulness can shrink the part of the brain linked to fear.",
    "Did you know? A clean space can lead to a calmer, more focused mind.",
    "Did you know? Laying your hand on your heart can activate a self-soothing response.",
    "Did you know? Drinking enough water improves cognitive function and emotional clarity.",
    "Did you know? Belly breathing helps deactivate your body’s stress response.",
    "Did you know? Regular journaling boosts your emotional awareness and memory.",
    "Did you know? Watching clouds can induce a meditative, calming state.",
    "Did you know? Coloring activates parts of the brain related to focus and creativity.",
    "Did you know? Taking breaks throughout the day boosts mood and productivity.",
    "Did you know? Connecting with a loved one can instantly boost your emotional resilience.",
    "Did you know? Listening to your favorite song can quickly shift your mood.",
    "Did you know? Practicing self-compassion strengthens emotional balance and resilience."
];

const uniqueDidYouKnowFacts = [...new Set(didYouKnowFacts)];

function displayDidYouKnow(elementId, options = { interval: 0 }) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with ID "${elementId}" not found.`);
            return;
        }

        const showNewFact = () => {
            const fact = uniqueDidYouKnowFacts[Math.floor(Math.random() * uniqueDidYouKnowFacts.length)];
            element.textContent = fact;
            element.setAttribute('aria-live', 'polite');
        };

        showNewFact();

        let intervalId = null;
        if (options.interval > 0) {
            intervalId = setInterval(showNewFact, options.interval);
        }

        return intervalId;
    } catch (error) {
        console.error('Error in displayDidYouKnow:', error);
        return null;
    }
}

function stopDidYouKnowCycle(intervalId) {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

export { displayDidYouKnow, stopDidYouKnowCycle };
