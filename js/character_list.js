document.addEventListener('DOMContentLoaded', () => {
    const characters = [
        {
            "name": "Taylor Abbott",
            "age": 23,
            "occupation": "professional hockey player",
            "hometown": "Cambridge, MA",
            "sexuality": "Gay",
            "pronouns": "He/Him",
            "imageUrl": "https://i.pinimg.com/736x/34/dc/af/34dcaff4176ca67aec0f114e6740d668.jpg",
            "moreLink": "characters/taylor.html"
        },
        {
            "name": "Declan Thorne",
            "age": 27,
            "occupation": "professional hockey player",
            "hometown": "Thunder Bay, ON",
            "sexuality": "Bisexual",
            "pronouns": "He/Him",
            "imageUrl": "https://i.pinimg.com/1200x/34/d8/06/34d80631f3162bcf0ca3911ac94afd37.jpg",
            "moreLink": "characters/declan.html"
        },
        {
            "name": "Asher Wilde",
            "age": 28,
            "occupation": "NHL scout",
            "hometown": "Toronto, ON",
            "sexuality": "Bisexual",
            "pronouns": "He/Him",
            "imageUrl": "https://i.pinimg.com/736x/b3/a7/ce/b3a7ced18605584de49590a6f389ff10.jpg",
            "moreLink": "characters/asher.html"
        }
    ];

    const container = document.getElementById('character-container');

    // Function to display characters
    const displayCharacters = (characters) => {
        container.innerHTML = ''; // Clear existing cards
        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <div class="image-container">
                    <img src="${character.imageUrl}" alt="${character.name}">
                    <div class="info-overlay">
                        <h3 class="character-name">${character.name}</h3>
                        <table class="character-details">
                            <tr><td><strong>AGE</strong></td><td>${character.age}</td></tr>
                            <tr><td><strong>OCCUPATION</strong></td><td>${character.occupation.toUpperCase()}</td></tr>
                            <tr><td><strong>HOMETOWN</strong></td><td>${character.hometown.toUpperCase()}</td></tr>
                            <tr><td><strong>SEXUALITY</strong></td><td>${character.sexuality.toUpperCase()}</td></tr>
                            <tr><td><strong>PRONOUNS</strong></td><td>${character.pronouns.toUpperCase()}</td></tr>
                        </table>
                        <a href="${character.moreLink}" class="view-more">VIEW MORE</a>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    };

    // Sort characters alphabetically by name
    const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));

    // Display sorted characters
    displayCharacters(sortedCharacters);
});
