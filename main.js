const buttons = document.querySelectorAll(".button"),
    videos = document.querySelectorAll("video"),
    icon = document.querySelector("i"),
    func = character => {
        const button = document.querySelector(`div.${character}`),
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
    };

window.addEventListener("keydown", (event) => {
    const character = event.key;
    func(character);
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const character = event.target.innerText.toLowerCase();
        func(character);
    });

    button.addEventListener("transitionend", () => {
        button.classList.remove("transform-buttons");
    });
});

icon.addEventListener("transitionend", () => {
    icon.classList.remove("transform-icon");
});