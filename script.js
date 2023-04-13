// Variables
const collection = [
    {
        img: "assets/img/the-legend-of-zelda-the-wind-waker.jpg",
        title: "The legend of Zelda",
        styles: ["action", "aventure", "RPG"],
        releaseYear: 1986,
        developer: "Nintendo",
        platforms: ["consoles Nintendo"],
        linkJv: "https://www.jeuxvideo.com/jeux/wii-u-wiiu/00047665-the-legend-of-zelda-the-wind-waker-hd.htm"
    },
    {
        img: "assets/img/Mass-effect.jpg",
        title: "Mass effect",
        styles: ["action", "RGP"],
        releaseYear: 2007,
        developer: "Bioware",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-1316997/"
    },
    {
        img: "assets/img/rocket-league.jpg",
        title: "Rocket League",
        styles: ["course", "football"],
        releaseYear: 2015,
        developer: "Psyonix",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-83427/"
    },
    {
        img: "assets/img/red-dead-redemption.jpg",
        title: "Red dead redemption",
        styles: ["action", "aventure"],
        releaseYear: 2010,
        developer: "Rockstar",
        platforms: ["console"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-554033/"
    },
    {
        img: "assets/img/pokemon.jpg", 
        title: "Pokémon",
        styles: ["RPG"],
        releaseYear: 1996,
        developer: "Game freak",
        platforms: ["consoles Nintendo"],
        linkJv: "https://www.jeuxvideo.com/jeux/gameboy-advance-gba/00013395-pokemon-version-emeraude.htm"
    },
    {
        img: "assets/img/grand-theft-auto.jpg",
        title: "Grand theft auto",
        styles: ["action", "aventure", "tir"],
        releaseYear: 1997,
        developer: "Rockstar",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-62643/"
    },
    {
        img: "assets/img/The-Last-of-us.jpg",
        title: "The last of us",
        styles: ["action", "aventure"],
        releaseYear: 2013,
        developer: "Naughty dog",
        platforms: ["console", "PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/playstation-3-ps3/00042999-the-last-of-us.htm"
    },
    {
        img: "assets/img/rayman-legends.jpg",
        title: "Rayman",
        styles: ["plates-formes"],
        releaseYear: 1995,
        developer: "Ubisoft",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-78808/"
    },
    {
        img: "assets/img/crash-bandicoot-n-sane-trilogy.jpg",
        title: "Crash Bandicoot",
        styles: ["plates-formes"],
        releaseYear: 1996,
        developer: "Naughty dog",
        platforms: ["console", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-577503/"
    },
    {
        img: "assets/img/Monster-Hunter-World-Iceborne.jpg",
        title: "Monster hunter",
        styles: ["action", "RPG"],
        releaseYear: 2004,
        developer: "Capcom",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-972006/"
    },
    {
        img: "assets/img/ark-survival-evolved.jpg",
        title: "ARK survival evolved",
        styles: ["action", "aventure", "survie"],
        releaseYear: 2015,
        developer: "studio Wildcard",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"], 
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-425292/"
    },
    {
        img: "assets/img/Minecraft.jpg",
        title: "Minecraft",
        styles: ["aventure", "construction"],
        releaseYear: 2011,
        developer: "Mojang studio",
        platforms: ["console", "consoles Nintendo", "PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-75478/"
    },
    {
        img: "assets/img/league-of-legends.jpg",
        title: "League of legend",
        styles: ["MOBA"],
        releaseYear: 2009,
        developer: "Riot",
        platforms: ["PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-70719/"
    },
    {
        img: "assets/img/hearthstone.jpg",
        title: "Hearthstone",
        styles: ["carte"],
        releaseYear: 2014,
        developer: "Blizzard",
        platforms: ["PC", "téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-80458/"
    },
    {
        img: "assets/img/elden-ring.jpg",
        title: "Elden ring",
        styles: ["Action", "RPG"],
        releaseYear: 2022,
        developer: "FromSoftware",
        platforms: ["console", "PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-1056358/"
    },
    {
        img: "assets/img/clash-royal.jpg",
        title: "Clash royal",
        styles: ["MOBA", "tower defense"],
        releaseYear: 2016,
        developer: "Supercell",
        platforms: ["téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-454829/"
    }
];
const cardContainer = document.getElementById("card-container");

// Program
for (let i=0; i<collection.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    
    let img = document.createElement("img");
    img.src = collection[i].img;

    let title = document.createElement("h2");
    title.textContent = collection[i].title;

    let styles = document.createElement("ul");
    for (let j=0; j<collection[i].styles.length; j++) {
        const style = document.createElement("li");
        style.textContent = collection[i].styles[j];
        styles.appendChild(style);
    }

    let releaseYear = document.createElement("p");
    releaseYear.textContent = collection[i].releaseYear;

    let developer = document.createElement("p");
    developer.textContent = collection[i].developer;

    let platforms = document.createElement("ul");
    for (let j=0; j<collection[i].platforms.length; j++) {
        const platform = document.createElement("li");
        platform.textContent = collection[i].platforms[j];
        platforms.appendChild(platform);
    }

    let websiteLink = document.createElement("a");
    websiteLink.href = collection[i].linkJv;
    websiteLink.target = "_blank";

    let websiteIcon = document.createElement("img");
    websiteIcon.src = "assets/img/jeuxvideocom.jpg";
    websiteIcon.className = "icon";
    // websiteIcon.style.width = "50px";
    // websiteIcon.style.height = "50px";


    websiteLink.appendChild(websiteIcon)

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(styles);
    card.appendChild(releaseYear);
    card.appendChild(developer);
    card.appendChild(platforms);
    card.appendChild(websiteLink);
    console.log(card);

    cardContainer.appendChild(card);
}