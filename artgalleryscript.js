document.querySelectorAll(".gallery-image").forEach(container => {
    const cardImage = container  
    const infoBox = container.querySelector(".info-box");

    let isDragging = false;
    let dragTimeout = null;

    let startX, startY;
    let currentX = 0;
    let currentY = 0;

    cardImage.addEventListener("mousedown", (e) => {
        isDragging = true;

        startX = e.clientX - currentX;
        startY = e.clientY - currentY;

        container.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        currentX = e.clientX - startX;
        currentY = e.clientY - startY;

        const tiltAmount = currentX * 0.1; 
        const maxTilt = 15;

        const clampedTilt = Math.max(
            -maxTilt,
            Math.min(maxTilt, tiltAmount)
        );

        container.style.transform =
        `translate(${currentX}px, ${currentY}px) rotate(${clampedTilt}deg)`;
    });

    document.addEventListener("mouseup", () => {
        if (!isDragging) return;

        isDragging = false;

        currentX = 0;
        currentY = 0;

        cardImage.style.transition = "transform 0.5s cubic-bezier(.34,1.56,.64,1)"
        cardImage.style.transform = "translate(0, 0)";
    });
    cardImage.addEventListener("mouseenter", () => {
        infoBox.style.opacity = "1";
        infoBox.style.transform = "translateY(0)";
    });

    cardImage.addEventListener("mouseleave", () => {
        infoBox.style.opacity = "0";
        infoBox.style.transform = "translateY(10px)";
    });
})
