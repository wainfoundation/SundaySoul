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
    "Fun fact: Coloring or doodling can lower cortisol levels!",
    "Fun fact: Watching the sunrise can create feelings of awe and peace!",
    "Fun fact: Mindful eating can enhance your appreciation for food!",
    "Fun fact: Learning something new boosts your brain’s happiness!",
    "Fun fact: Complimenting others also uplifts your own mood!",
    "Fun fact: Fresh air can instantly refresh your mind!",
    "Fun fact: Soft lighting can create a calming environment!",
    "Fun fact: Decluttering your space can declutter your mind!",
    "Fun fact: Giving yourself permission to rest is powerful self-care!",
    "Fun fact: Gentle yoga stretches can relax your nervous system!",
    "Fun fact: Dancing freely releases built-up emotional tension!",
    "Fun fact: Being around plants can boost your mental health!",
    "Fun fact: Forgiveness reduces emotional burdens!",
    "Fun fact: A simple smile at a stranger can spread happiness!",
    "Fun fact: Spending time near water lowers cortisol levels!",
    "Fun fact: Humming can activate your body’s relaxation response!",
    "Fun fact: Creating routines can bring a sense of safety and peace!",
    "Fun fact: Disconnecting from social media improves focus and joy!",
    "Fun fact: Practicing acceptance leads to emotional freedom!",
    "Fun fact: Candlelight can create a cozy, calming atmosphere!",
    "Fun fact: Writing a letter you never send can heal hidden feelings!",
    "Fun fact: Stretching your arms wide can increase feelings of confidence!",
    "Fun fact: Spending time with loved ones strengthens resilience!",
    "Fun fact: Rain sounds can soothe an anxious mind!",
    "Fun fact: Belly breathing activates your body’s calm system!",
    "Fun fact: Scented candles can trigger positive memories!",
    "Fun fact: Random acts of kindness cause a ripple of good feelings!",
    "Fun fact: Laughing with friends strengthens emotional bonds!",
    "Fun fact: Watching fish swim has proven calming effects!",
    "Fun fact: Baking or cooking can be a creative and soothing activity!",
    "Fun fact: Trying a new hobby can reignite excitement for life!",
    "Fun fact: Light stretching before bed improves sleep quality!",
    "Fun fact: Saying positive affirmations daily can reshape your mindset!",
    "Fun fact: Gazing at the stars inspires calm and wonder!",
    "Fun fact: Hugging yourself can trigger feelings of comfort!",
    "Fun fact: Listening to nature sounds reduces mental fatigue!",
    "Fun fact: Organizing your thoughts in a journal clears mental clutter!",
    "Fun fact: Warm baths can soothe both muscles and emotions!",
    "Fun fact: Visualizing success can boost real-world confidence!",
    "Fun fact: Being near animals lowers blood pressure and stress!",
    "Fun fact: Singing, even badly, lifts your mood!",
    "Fun fact: Walking barefoot on grass connects you to the earth!",
    "Fun fact: Lighting incense can enhance relaxation rituals!",
    "Fun fact: Rewatching favorite movies can bring emotional comfort!",
    "Fun fact: Heartfelt gratitude increases long-term happiness!",
    "Fun fact: A cozy blanket can create a sense of emotional security!",
    "Fun fact: Declaring daily wins builds momentum for bigger goals!",
    "Fun fact: Slowing down to notice small joys sharpens emotional well-being!",
    "Fun fact: Deep yawning can actually relax your brain!",
    "Fun fact: Watching clouds drift can clear your mind!",
    "Fun fact: Rocking in a chair soothes the nervous system!",
    "Fun fact: Smiling at your reflection builds inner warmth!",
    "Fun fact: Stretching your neck and shoulders eases emotional tension!",
    "Fun fact: Petting animals boosts dopamine levels!",
    "Fun fact: Wearing cozy clothes can enhance feelings of safety!",
    "Fun fact: Listening to your favorite song can reset a bad mood!",
    "Fun fact: Short naps can dramatically improve emotional resilience!",
    "Fun fact: Drinking herbal tea promotes mental relaxation!",
    "Fun fact: Watching fire flicker can induce a meditative state!",
    "Fun fact: Handwritten notes express emotion more deeply than texts!",
    "Fun fact: Making art with no judgment boosts emotional freedom!",
    "Fun fact: Smelling fresh bread triggers comfort memories in the brain!",
    "Fun fact: Gratitude can even improve sleep quality!",
    "Fun fact: Practicing compassion for yourself strengthens emotional balance!",
    "Fun fact: Birdwatching can improve mindfulness and calm!",
    "Fun fact: Coloring mandalas can center your mind!",
    "Fun fact: Focusing on your five senses brings you into the present moment!",
    "Fun fact: Wrapping up in a weighted blanket reduces anxiety!",
    "Fun fact: Dancing in your living room can release pent-up emotions!",
    "Fun fact: Slow, rhythmic breathing strengthens your heart and mind!",
    "Fun fact: Smiling while thinking of a loved one can brighten your day instantly!"
];

const uniqueFunFacts = [...new Set(funFacts)];

function displayFunFact(elementId, options = { interval: 0 }) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with ID "${elementId}" not found.`);
            return;
        }

        // Function to show a new random fact
        const showNewFact = () => {
            const fact = uniqueFunFacts[Math.floor(Math.random() * uniqueFunFacts.length)];
            element.textContent = fact;
            element.setAttribute('aria-live', 'polite');
        };

        // Show initial fact
        showNewFact();

        // Set up interval if specified (in milliseconds)
        let intervalId = null;
        if (options.interval > 0) {
            intervalId = setInterval(showNewFact, options.interval);
        }

        // Return intervalId for cleanup or manual control
        return intervalId;
    } catch (error) {
        console.error('Error in displayFunFact:', error);
        return null;
    }
}

// Function to stop cycling (for cleanup or manual control)
function stopFunFactCycle(intervalId) {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

export { displayFunFact, stopFunFactCycle };
