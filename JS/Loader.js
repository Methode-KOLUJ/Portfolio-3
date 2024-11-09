document.addEventListener("DOMContentLoaded", function () {
  const languages = document.querySelectorAll(".language");
  const logo = document.getElementById("logo");

  // Timeline principale
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  // 1. Disperser les éléments de la classe language (disperser plus largement)
  tl.to(languages, {
    x: () => gsap.utils.random(-300, 300),
    y: () => gsap.utils.random(-300, 300),
    opacity: 1,
    duration: 2,
    stagger: 0.1,
    ease: "sine.inOut",
  })

    // 2. Rassembler les éléments pour former le logo
    .to(languages, {
      x: 0,
      y: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power3.inOut",
    })

    // 3. Apparition du logo au centre
    .to("#logo", {
      opacity: 1,
      scale: 1.2,
      duration: 1,
    })

    // 4. Effet de dispersion du logo et disparition finale de la page de chargement
    .to("#logo", {
      scale: 3,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: () => {
        setTimeout(() => {
          document.getElementById("loading-container").style.display = "none";
        }, 500);
      },
    });

  // Garder la page de chargement visible pendant 5 secondes
  setTimeout(() => {
    document.getElementById("loading-container").style.display = "none";
  }, 13500);
});
