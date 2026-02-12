const particleSrc = "Images/Heart.png";
var sqeaksound = new Audio('Sounds/Squeak.mp3');

/*let patted = false

document.addEventListener("DOMContentLoaded", () => {
  const cardImage = document.getElementById("floatingImage");
  const headButton = document.querySelector(".pet-button");

  if (!cardImage) {
    console.error("cardImage not found");
    return;
  }

  if (!headButton) {
    console.error("headButton not found");
    return;
  }

  headButton.addEventListener("mouseenter", () => {
    cardImage.src = hoverSrc;
  });

  headButton.addEventListener("mouseleave", () => {
    if (patted) return;
    cardImage.src = idleSrc;
  });

  let clickTimeout;

   let canClick = true;
  const cooldownTime = 750;

  headButton.addEventListener("mousedown", () => {

    if (!canClick) return;
    const rect = cardImage.getBoundingClientRect();

    canClick = false;
    patted = true
    const wrapper = cardImage.closest(".floating-image");

    clearTimeout(clickTimeout);
    cardImage.src = clickSrc;

    const particleCount = 7;
    const delayBetween = 75;

    clickTimeout = setTimeout(() => {
      cardImage.src = idleSrc;
    }, 900);
    
    cardImage.classList.remove("squish");
    void cardImage.offsetWidth;
    cardImage.classList.add("squish");

    sqeaksound.play();

//Create particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement("img");
        particle.src = particleSrc; 
        particle.className = "particle";

        const offsetX = Math.random() * rect.width; 
        const offsetY = Math.random() * rect.height;  

        particle.style.left = `${offsetX}px`;
        particle.style.top = `${offsetY}px`;

        wrapper.appendChild(particle);

       
        particle.addEventListener("animationend", () => {
          particle.remove();
        });
      }, i * delayBetween);
    }

    setTimeout(() => {
      canClick = true;
      patted = false
    }, cooldownTime);
  });
});*/

document.querySelectorAll(".pettable-image").forEach(container => {

  const cardImage = container.querySelector(".floating-card");
  const headButton = container.querySelector(".pet-button");

  if (!cardImage || !headButton) return;

  const idleSrc = container.dataset.idle;
  const hoverSrc = container.dataset.hover;
  const clickSrc = container.dataset.click;

  [idleSrc, hoverSrc, clickSrc].forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let patted = false;
  let canClick = true;

  headButton.addEventListener("mouseenter", () => {
    cardImage.src = hoverSrc;
  });

  headButton.addEventListener("mouseleave", () => {
    if (patted) return;
    cardImage.src = idleSrc;
  });

  headButton.addEventListener("mousedown", () => {

    if (!canClick) return;
    canClick = false;
    patted = true;

    const rect = cardImage.getBoundingClientRect();

    cardImage.src = clickSrc;

   

    const particleCount = 7;
    const delayBetween = 75;

    clickTimeout = setTimeout(() => {
      if (patted) return;
      cardImage.src = idleSrc;
    }, 900);

    cardImage.classList.remove("squish");
    void cardImage.offsetWidth;
    cardImage.classList.add("squish");

    sqeaksound.play();

    //Create particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement("img");
        particle.src = particleSrc;
        particle.className = "particle";

        const offsetX = Math.random() * rect.width;
        const offsetY = Math.random() * rect.height;

        particle.style.left = `${offsetX}px`;
        particle.style.top = `${offsetY}px`;

        container.appendChild(particle);

        particle.addEventListener("animationend", () => {
          particle.remove();
        });
      }, i * delayBetween);
    }

    setTimeout(() => {
      canClick = true;
      patted = false;
    }, 750);

  });

});