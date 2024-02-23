function getRandomTemplate() {
    const randomIndex = Math.floor(Math.random() * templates.length);
    return templates[randomIndex];
}

function generateMadLibs() {
    const madLibsResult = document.getElementById("madLibsResult");

    // Filter out cards with null part values
    const validCards = CDS.filter(card => card.part !== null);

    // Get a random template
    const randomTemplate = getRandomTemplate();

    // Replace placeholders with random words from valid Card objects
    const story = randomTemplate.replace(/{(\w+)}/g, (_, part) => {
        const matchingCards = validCards.filter(card => card.part === part);
        if (matchingCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * matchingCards.length);
            return matchingCards[randomIndex].text || '';
        } else {
            return '';
        }
    });

    madLibsResult.innerHTML = `<p>${story}</p>`;
}
