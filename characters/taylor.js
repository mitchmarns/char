import { iconBank } from "../js/iconBank.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  populateCharacterInfo();
  populateGallery();
  setupRelationships();
  populatePlaylist();
  setupIcons();
});

// Tab Switching Logic
function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      document
        .getElementById(tab.getAttribute("data-tab"))
        .classList.add("active");
    });
  });
}

const characterIcons = ["dog", "hockey"];

const characterInfo = {
  basics: {
    name: "Taylor Abbott",
    nickname: "Tay, T",
    birthday: "July 3",
    zodiac: "Cancer",
    age: "23",
    hometown: "Cambridge, MA",
    education: "High School",
    occupation: "Professional Hockey Player",
    sexuality: "Gay",
    pronouns: "He/Him",
    languages: "English",
    religion: "Not religious, but raised Catholic",
  },
  physical: {
    height: "6'0",
    weight: "185 lbs",
    hairColor: "sandy brown",
    eyeColor: "green",
    complexion: "tanned olive skin",
    build: "athletic",
    scars: "tba",
    birthMarks: "tba",
    tattoos: "many, but most notably his sleeve",
    piercings: "none",
  },
  personality: {
    traits:
      "affectionate, tenacious, proactive, loyal, observant, sentimental, pessimistic, clingy, evasive, possessive, moody, vengeful, naive",
    moralAlignment: "chaotic good",
    hobbies: "Hockey, video games, dancing, music",
    strengths: "Leadership, humor",
    weaknesses: "Quick temper, self-doubt",
    habits: "tba",
  },
  favorites: {
    food: "Pizza, sushi",
    music: "hip-hop, pop",
    movies: "Sports dramas, comedies",
    color: "Blue",
    sports: "Hockey, football",
  },
  inspiration: {
    characters:
      "nate archibald (gossip girl), harvey specter (suits), jamie fraser (outlander), anthony dinozzo (ncis), paul varjak (breakfast at tiffanys)",
  },
};

const relationships = [
  {
    id: "chase",
    name: "chase love",
    type: "best friend",
    image:
      "https://i.pinimg.com/736x/df/51/41/df5141c9b7efd896d075bf09fec91150.jpg",
    avatar:
      "https://i.pinimg.com/736x/04/96/18/04961832243d57ab9c4cee8a5f58e200.jpg",
    title: "sharing beds like little kids and laughing til our ribs get tough",
    stats: {
      trust: "100%",
      chemistry: "90%",
      history: "90%",
    },
    dynamic: `Taylor doesn’t say it out loud – he doesn’t say most
                    important things out loud – but Chase is the closest thing
                    that he knows to a home. He’s the one constant in a life
                    that’s been full of people leaving, disappointing, or
                    abandoning him when he needed it most. Taylor knows without
                    a doubt that he wouldn’t have made it through his teenage
                    years without Chase, and even know, he wouldn’t be able to
                    and often wonders if he’s burdening Chase. He’ll never ask,
                    too afraid of an answer that he’s heard a million times
                    before. Sometimes guilt takes over when he thinks about it
                    too much – he’s taken too much, leaned too hard, given too
                    little in return, but chase has never treated him like an
                    obligation. Maybe that’s why its so hard for Taylor to
                    accept that he deserves, because if chase is his family – in
                    a way his own never was – then losing him would be the one
                    thing he couldn’t survive.`,
    tags: ["wifeys", "best friend", "former roommates", "former teammate"],
  },
  // Add more relationships here
];

const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/16/25/1e/16251e2d19c7be40f74170e10d857b42.jpg",
    alt: "Taylor Abbott on the ice",
    caption: "Game day against the Bruins",
  },
  {
    src: "https://i.pinimg.com/736x/fa/19/2f/fa192fc500e2dcdd95d957084a0680f2.jpg",
    alt: "Taylor at practice",
    caption: "Morning skate",
  },
  {
    src: "https://i.pinimg.com/736x/03/44/5f/03445f8e06ac0b4148d87393cc749838.jpg",
    alt: "Taylor with Chase",
    caption: "Off-season training with Chase",
  },
  {
    src: "https://i.pinimg.com/736x/79/44/ad/7944ad0fa57913601c009ad3be699897.jpg",
    alt: "Taylor Abbott casual",
    caption: "Day off in the city",
  },
  // Add more images as needed
];

const images = [
    "https://i.pinimg.com/736x/c5/02/7c/c5027c1b5097a51cf5252999587e4d25.jpg",
    "https://i.pinimg.com/736x/1c/ac/21/1cac21a52446a0a52c9fbbed2e5b7a3f.jpg",
    "https://i.pinimg.com/736x/93/cd/5b/93cd5b789f935dc9be8a3b08f230f44a.jpg",
    "https://i.pinimg.com/736x/d7/bb/59/d7bb591f2259de16f1f12c3f711d2a07.jpg",
    "https://i.pinimg.com/736x/7b/48/8f/7b488ff43cd52da5b81f62f1863e52be.jpg"
];

const playlistData = {
    songs: [
        { number: "01", title: "Apple", artist: "Charlie XCX", duration: "2:32" },
        { number: "02", title: "hate to be lame", artist: "Lizzy McAlpine", duration: "2:37" },
        { number: "03", title: "Bloodshot", artist: "Julien Baker", duration: "3:47" }
    ]
};

// Populate Character Info
function populateCharacterInfo() {
  const infoContainer = document.getElementById("info-container");

  function camelCaseToReadable(str) {
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (match) => match.toUpperCase());
  }

  for (const [section, details] of Object.entries(characterInfo)) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = `info-section ${section}`;
    sectionDiv.innerHTML = `<h2>${
      section.charAt(0).toUpperCase() + section.slice(1)
    }</h2>`;

    for (const [label, value] of Object.entries(details)) {
      sectionDiv.innerHTML += `<div class='info-item'><span class='label'>${camelCaseToReadable(
        label
      )}:</span> <span class='value'>${value}</span></div>`;
    }

    infoContainer.appendChild(sectionDiv);
  }
}

// Populate Gallery
function populateGallery() {
  const galleryContainer = document.getElementById("gallery");
  const galleryGrid = document.createElement("div");
  galleryGrid.className = "gallery-grid";

  galleryImages.forEach((image) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.innerHTML = `<img src='${image.src}' alt='${image.alt}' /><div class='gallery-caption'>${image.caption}</div>`;

    galleryItem.addEventListener("click", () =>
      showLightbox(image.src, image.caption)
    );
    galleryGrid.appendChild(galleryItem);
  });

  galleryContainer.appendChild(galleryGrid);
}

// Lightbox Functionality
function showLightbox(src, caption) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `<div class='lightbox-content'><span class='lightbox-close'></span><img src='${src}' alt='${caption}' /><div class='lightbox-caption'>${caption}</div></div>`;

  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) document.body.removeChild(lightbox);
  });
  document
    .querySelector(".lightbox-close")
    .addEventListener("click", () => document.body.removeChild(lightbox));
}

// Setup Relationship Popups
function setupRelationships() {
  const connectionsList = document.querySelector(".connections-list");
  relationships.forEach((rel) => {
    const connectionDiv = document.createElement("div");
    connectionDiv.classList.add("connection");
    connectionDiv.innerHTML = `<img src='${rel.image}' alt='${rel.name}' /><div class='connection-info'><h4 class='connection-name' data-connection-id='${rel.id}'>${rel.name}</h4><p>${rel.type}</p></div>`;

    const popupDiv = document.createElement("div");
    popupDiv.id = rel.id;
    popupDiv.classList.add("relationship-popup");
    popupDiv.innerHTML = `<div class='relationship-content'><div class='relationship-close'></div><div class='relationship-header'><img class='relationship-avatar' src='${
      rel.avatar
    }' alt='${rel.name}' /><div class='relationship-title'><h3>${
      rel.name
    }</h3><p>${
      rel.title
    }</p></div></div><div class='relationship-body'><div class='relationship-stats'>${Object.entries(
      rel.stats
    )
      .map(
        ([key, value]) =>
          `<div class='relationship-stat'><div class='stat-value'>${value}</div><div class='stat-label'>${
            key.charAt(0).toUpperCase() + key.slice(1)
          }</div></div>`
      )
      .join("")}</div><h4>dynamic</h4><p>${
      rel.dynamic
    }</p><div class='relationship-tags'>${rel.tags
      .map((tag) => `<span class='relationship-tag'>${tag}</span>`)
      .join("")}</div></div></div>`;

    connectionsList.appendChild(connectionDiv);
    connectionsList.appendChild(popupDiv);
  });

  document.querySelectorAll(".connection-name").forEach((name) => {
    name.addEventListener("click", function () {
      document
        .getElementById(this.getAttribute("data-connection-id"))
        .classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelectorAll(".relationship-close").forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".relationship-popup").classList.remove("active");
      document.body.style.overflow = "";
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      document
        .querySelector(".relationship-popup.active")
        ?.classList.remove("active");
  });
}

// Setup Character Icons
function setupIcons() {
  const iconContainer = document.getElementById("icon-container");
  characterIcons.forEach((iconKey) => {
    if (iconBank[iconKey]) {
      const iconData = iconBank[iconKey];
      const iconElement = document.createElement("img");
      iconElement.src = iconData.src;
      iconElement.alt = iconData.alt;
      iconElement.className = "character-icon";
      iconElement.setAttribute("data-tooltip", iconData.tooltip);
      iconElement.addEventListener("mouseover", (e) =>
        showTooltip(e, iconData.tooltip)
      );
      iconElement.addEventListener("mouseout", hideTooltip);
      iconContainer.appendChild(iconElement);
    }
  });
}

// Tooltip Functions
function showTooltip(event, text) {
  let tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = text;
  document.body.appendChild(tooltip);
  tooltip.style.left = `${event.pageX + 10}px`;
  tooltip.style.top = `${event.pageY + 10}px`;
  event.target.tooltipElement = tooltip;
}
function hideTooltip(event) {
  document.body.removeChild(event.target.tooltipElement);
}

function createMasonryLayout(columns = 3) {
    const moodboardContainer = document.getElementById("columness");
    moodboardContainer.innerHTML = "";

    // Create column containers
    const columnElements = [];
    for (let i = 0; i < columns; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        columnElements.push(column);
        moodboardContainer.appendChild(column);
    }

    // Distribute images into columns in order
    images.forEach((src, index) => {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("pintick");

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Moodboard image";
        img.loading = "lazy";

        imgWrapper.appendChild(img);
        columnElements[index % columns].appendChild(imgWrapper);
    });
}

// Run on page load
window.addEventListener("load", () => createMasonryLayout());

function populatePlaylist() {
    const playlistContainer = document.getElementById("playlist-container");
    playlistContainer.className = "playlist-container"; // Apply your CSS class
  
    // Create the playlist header
    const header = document.createElement("div");
    header.className = "playlist-header";
  
    // Create the song list container
    const songList = document.createElement("div");
    songList.className = "song-list";
  
    // Loop through playlist data and create song items
    playlistData.songs.forEach((song) => {
      const songItem = document.createElement("div");
      songItem.className = "song-item";
      songItem.innerHTML = `
        <span class="song-number">${song.number}.</span>
        <div class="song-details">
          <div class="song-title">${song.title}</div>
          <div class="song-artist">${song.artist}</div>
        </div>
        <span class="song-duration">${song.duration}</span>
      `;
  
      songList.appendChild(songItem);
    });
  
    // Create the playlist footer
    const footer = document.createElement("div");
    footer.className = "playlist-footer";
    footer.textContent = `Total Songs: ${playlistData.songs.length}`;
  
    // Append everything to the main playlist container
    playlistContainer.appendChild(header);
    playlistContainer.appendChild(songList);
    playlistContainer.appendChild(footer);
  }
  
