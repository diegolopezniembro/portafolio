  const textElement = document.getElementById("typewriter");
  const textArray = [
    "Welcome to my portfolio as a trainee developer. ",
    "I create amazing web applications. ",
    "Check out my projects below! ",
  ];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 55;
  const deleteSpeed = 50;
  const delayBetweenTexts = 2000;

  function type() {
    const currentText = textArray[currentIndex];
    textElement.textContent = currentText.slice(0, charIndex);

    if (isDeleting) {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length; 
      }
    } else {
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
        return;
      }
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });

