let index = 0,
    interval = 1000,
    intervalWhite = 9000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;


const animateLyrics = star => {
    star.style.setProperty("--white-star-left", `${rand(0, 100)}%`);
    star.style.setProperty("--white-star-top", `${rand(20, 100)}%`);
    star.style.setProperty("--white-star-opacity", `${rand(80, 100)}%`);
    star.style.animation = "none";
    star.offHeight;
    star.style.animation = "";
}

const backgroundStar = star => {
    star.style.setProperty("--back-star-left", `${rand(0, 100)}%`);
    star.style.setProperty("--back-star-top", `${rand(0, 25)}%`);
}


for (const star of document.getElementsByClassName("star")){
    setTimeout(()=> {
        animateLyrics(star);
        setInterval(() => {animateLyrics(star);}, 3000);
    }, index++ * (intervalWhite/3));
}

for (const star of document.getElementsByClassName("backstar")){
    backgroundStar(star);
}