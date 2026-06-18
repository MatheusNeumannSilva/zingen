window.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const section = document.querySelector("[data-reveal-section]");

  if (!section) {
    return;
  }

  const copyItems = gsap.utils.toArray(
    section.querySelectorAll("[data-reveal='copy']")
  );
  const phoneShowcase = section.querySelector("[data-phone-showcase]");
  const animatedItems = [...copyItems, phoneShowcase].filter(Boolean);

  if (reduceMotion.matches) {
    gsap.set(animatedItems, {
      clearProps: "all",
    });
    return;
  }

  gsap.set(copyItems, {
    autoAlpha: 0,
    y: 28,
  });

  if (phoneShowcase) {
    gsap.set(phoneShowcase, {
      autoAlpha: 0,
      y: 72,
      scale: 0.985,
    });
  }

  const revealTimeline = gsap
    .timeline({
      defaults: {
        duration: 0.96,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        toggleActions: "play none none reverse",
      },
    })
    .to(copyItems, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.13,
    });

  if (phoneShowcase) {
    revealTimeline.to(
      phoneShowcase,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      },
      "-=0.34"
    );
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
