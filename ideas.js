const ideas = [
    {
        id: 1,
        title: "Scowl Towel",
        idea: "Can we ban towels? They touch bodies which is overtly sexual.",
        followUp: "Pretty sure Jesus did not use towels",
        tags: ["ban-hammer", "sexuality", "inappropriate", "shameful"]
    },{
        id: 2,
        title: "Unhealthy access",
        idea: "I think we should restrict access to health class. This is America.",
        followUp: `My daddy didn't go to health class and he lived to be 34`,
        tags: ["health", "progressive", "socialism"]
    },{
        id: 3,
        title: "Sexy Food",
        idea: "School lunches should not provide jello. It wiggles, and wiggling is suggestive.",
        followUp: "You know who made jello right? The devil. That's who.",
        tags: ["devil", "sexuality", "inappropriate", "sexy food"]
    },{
        id: 4,
        title: "Sexy Math",
        idea: "Why are you teaching math? Jesus couldn't do fractions so why should my kid?",
        followUp: "Numbers are woke and numbers on top of numbers will bring about the end of days.",
        tags: ["apocalypse", "woke", "sexy math", "#nope"]
    },{
        id: 5,
        title: "Jesus is from Bethlehem, PA",
        idea: "You need to ban geography. If it aint 'Murica then why we talkin bout it?",
        followUp: "Jesus was born in 'Murica and that's good enough for me.",
        tags: ["caucasian jesus", "murica", "places are dumb"]
    },{
        id: 6,
        title: "Teaching stuff sounds woke",
        idea: "I don't like that teachers teach stuff. Sounds woke leftist antifa to me.",
        followUp: "To be clear - I don't want to teach them neither.",
        tags: ["antifa", "woke", "leftist", "ban teaching"]
    },{
        id: 7,
        title: "History like I learned",
        idea: "Why is this history curriculum filled with stuff I never heard of - like civil rights?",
        followUp: "Just stick to Washington chopping down British trees because guns are cool.",
        tags: ["murica", "freedom", "eagles", "heritage"]
    }
];

const getIdea = () => {
    const random = Math.floor(Math.random() * ideas.length);
    return ideas[random];
}

module.exports = {
    ideas,
    getIdea
}