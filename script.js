// Functions
function $(tag){
    return document.createElement(tag);
}

// Variables
const collection = [
    {
        img: "assets/img/rayman-legends.jpg",
        title: "Rayman",
        styles: ["Platforms"],
        releaseYear: 1995,
        developer: "Ubisoft",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-78808/"
    },
    {
        img: "assets/img/grand-theft-auto.jpg",
        title: "Grand theft auto",
        styles: ["Action", "Adventure", "Shot"],
        releaseYear: 1997,
        developer: "Rockstar",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-62643/"
    },
    {
        img: "assets/img/league-of-legends.jpg",
        title: "League of legends",
        styles: ["MOBA"],
        releaseYear: 2009,
        developer: "Riot",
        platforms: ["PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-70719/"
    },
    {
        img: "assets/img/elden-ring.jpg",
        title: "Elden ring",
        styles: ["Action", "RPG"],
        releaseYear: 2022,
        developer: "From Software",
        platforms: ["Console", "PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-1056358/"
    },
    {
        img: "assets/img/Monster-Hunter-World-Iceborne.jpg",
        title: "Monster hunter",
        styles: ["Action", "RPG"],
        releaseYear: 2004,
        developer: "Capcom",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-972006/"
    },
    {
        img: "assets/img/hearthstone.jpg",
        title: "Hearthstone",
        styles: ["Cards"],
        releaseYear: 2014,
        developer: "Blizzard",
        platforms: ["PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-80458/"
    },
    {
        img: "assets/img/red-dead-redemption.jpg",
        title: "Red dead redemption",
        styles: ["Action", "Adventure"],
        releaseYear: 2010,
        developer: "Rockstar",
        platforms: ["Console"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-554033/"
    },
    {
        img: "assets/img/rocket-league.jpg",
        title: "Rocket league",
        styles: ["Race", "Football"],
        releaseYear: 2015,
        developer: "Psyonix",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-83427/"
    },
    {
        img: "assets/img/Mass-effect.jpg",
        title: "Mass effect",
        styles: ["Action", "RPG"],
        releaseYear: 2007,
        developer: "Bioware",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-1316997/"
    },
    {
        img: "assets/img/The-Last-of-us.jpg",
        title: "The last of us",
        styles: ["Action", "Adventure"],
        releaseYear: 2013,
        developer: "Naughty dog",
        platforms: ["Console", "PC"],
        linkJv: "https://www.jeuxvideo.com/jeux/playstation-3-ps3/00042999-the-last-of-us.htm"
    },
    {
        img: "assets/img/ark-survival-evolved.jpg",
        title: "ARK survival evolved",
        styles: ["Action", "Adventure", "Survival"],
        releaseYear: 2015,
        developer: "studio Wildcard",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"], 
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-425292/"
    },
    {
        img: "assets/img/Minecraft.jpg",
        title: "Minecraft",
        styles: ["Adventure", "Building"],
        releaseYear: 2011,
        developer: "Mojang studio",
        platforms: ["Console", "Consoles Nintendo", "PC", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-75478/"
    },
    {
        img: "assets/img/clash-royal.jpg",
        title: "Clash royal",
        styles: ["MOBA", "Tower defense"],
        releaseYear: 2016,
        developer: "Supercell",
        platforms: ["Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-454829/"
    },
    {
        img: "assets/img/crash-bandicoot-n-sane-trilogy.jpg",
        title: "Crash Bandicoot",
        styles: ["Platforms"],
        releaseYear: 1996,
        developer: "Naughty dog",
        platforms: ["Console", "Téléphone"],
        linkJv: "https://www.jeuxvideo.com/jeux/jeu-577503/"
    },
    {
        img: "assets/img/pokemon.jpg", 
        title: "Pokémon",
        styles: ["RPG"],
        releaseYear: 1996,
        developer: "Game freak",
        platforms: ["Consoles Nintendo"],
        linkJv: "https://www.jeuxvideo.com/jeux/gameboy-advance-gba/00013395-pokemon-version-emeraude.htm"
    },
    {
        img: "assets/img/the-legend-of-zelda-the-wind-waker.jpg",
        title: "The legend of Zelda",
        styles: ["Action", "Adventure", "RPG"],
        releaseYear: 1986,
        developer: "Nintendo",
        platforms: ["Consoles Nintendo"],
        linkJv: "https://www.jeuxvideo.com/jeux/wii-u-wiiu/00047665-the-legend-of-zelda-the-wind-waker-hd.htm"
    }
];
const cardContainer = document.getElementById("card-container");

// Program
for (let i=0; i<collection.length; i++) {
    let card = $("div");
    card.classList.add("card");
    
    let img = $("img");
    img.src = collection[i].img;

    let title = $("h2");
    title.textContent = collection[i].title;

    // Development studio
    let developer = $("p");
    developer.textContent = collection[i].developer;
    developer.className = "developer";

    // Release year
    let releaseYear = $("p");
    releaseYear.textContent = collection[i].releaseYear;
    releaseYear.className = "releaseYear";

    // Category 
    let stylesT = $('p');
    stylesT.textContent = "Category:";
    stylesT.className = "subTitle";
    let styles = $("ul");
    for (let j=0; j<collection[i].styles.length; j++) {
        const style = $("li");
        style.textContent = collection[i].styles[j];
        styles.appendChild(style);
        if((j+1)%2==0){
            style.className = "even";
        }
        else{
            style.className = "odd";
        }
    }
    styles.className = "styles";

    // Platforms
    let platformsT = $('p');
    platformsT.textContent = "Platforms:";
    platformsT.className = "subTitle";
    let platforms = $("ul");
    for (let j=0; j<collection[i].platforms.length; j++) {
        const platform = $("li");
        platform.textContent = collection[i].platforms[j];
        platforms.appendChild(platform);
        if((j+1)%2==0){
            platform.className = "even";
        }
        else{
            platform.className = "odd";
        }
    }
    platforms.className = "platforms";


    let websiteLink = $("a");
    websiteLink.href = collection[i].linkJv;
    websiteLink.target = "_blank";

    let websiteIcon = $("img");
    websiteIcon.src = "assets/img/jeuxvideocom.jpg";
    websiteIcon.className = "icon";

    websiteLink.appendChild(websiteIcon)

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(developer);
    card.appendChild(releaseYear);
    card.appendChild(stylesT)
    card.appendChild(styles);
    card.appendChild(platformsT);
    card.appendChild(platforms);
    card.appendChild(websiteLink);
    console.log(card);

    cardContainer.appendChild(card);
}