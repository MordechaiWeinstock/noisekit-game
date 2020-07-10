const buttons = document.querySelectorAll(".button"),
      videos = document.querySelectorAll("video"),
      icon = document.querySelector("i");

window.addEventListener("keydown", (event) => {
    const character = event.key,
          button = document.querySelector(`div.${character}`),
          sound = document.querySelector(`audio#${character}`),
          video = document.querySelector(`div.${character} video`);

    button.classList.add("transform-buttons");
    icon.classList.add("transform-icon");
    button.style.backgroundColor = "transparent";

    sound.currentTime = 0;
    sound.play();

    video.currentTime = 0;
    video.play()
    
    video.addEventListener("ended", () => {
        button.style.backgroundColor = "#cd9bda";
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const character = event.target.innerText.toLowerCase(),
              button = document.querySelector(`div.${character}`),
              sound = document.querySelector(`audio#${character}`),
              video = document.querySelector(`div.${character} video`);

        button.classList.add("transform-buttons");
        icon.classList.add("transform-icon");
        button.style.backgroundColor = "transparent";
    
        sound.currentTime = 0;
        sound.play();
    
        video.currentTime = 0;
        video.play()

        video.addEventListener("ended", () => {
            button.style.backgroundColor = "#cd9bda";
        });
    });

    button.addEventListener("transitionend", () => {
        button.classList.remove("transform-buttons");
    });
});

icon.addEventListener("transitionend", () => {
    icon.classList.remove("transform-icon");
});