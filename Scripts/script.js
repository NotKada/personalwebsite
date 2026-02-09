[idleSrc, hoverSrc, clickSrc].forEach(src => {
  const img = new Image();
  img.src = src;
});

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
    cardImage.src = "character_hover.png";
  });

  headButton.addEventListener("mouseleave", () => {
    cardImage.src = "character_idle.png";
  });
});