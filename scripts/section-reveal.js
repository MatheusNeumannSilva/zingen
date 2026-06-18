window.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: "power3.out",
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) {
    clearAnimatedStyles();
    return;
  }

  setupAboutReveal();
  setupFeatureCardsReveal();
  setupPricingReveal();

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});

function setupAboutReveal() {
  const section = document.querySelector("[data-reveal-section]");

  if (!section) {
    return;
  }

  const copyItems = gsap.utils.toArray(
    section.querySelectorAll("[data-reveal='copy']")
  );
  const phoneShowcase = section.querySelector("[data-phone-showcase]");

  gsap.set(copyItems, {
    autoAlpha: 0,
    y: 24,
    force3D: true,
  });

  if (phoneShowcase) {
    gsap.set(phoneShowcase, {
      autoAlpha: 0,
      y: 56,
      scale: 0.985,
      force3D: true,
    });
  }

  const revealTimeline = gsap.timeline({
    defaults: {
      duration: 0.88,
    },
    scrollTrigger: {
      trigger: section,
      start: "top 72%",
      toggleActions: "play none none reverse",
    },
  });

  revealTimeline.to(copyItems, {
    autoAlpha: 1,
    y: 0,
    stagger: 0.12,
  });

  if (phoneShowcase) {
    revealTimeline.to(
      phoneShowcase,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      },
      "-=0.32"
    );
  }
}

function setupFeatureCardsReveal() {
  const section = document.querySelector("[data-features-section]");

  if (!section) {
    return;
  }

  const cards = gsap.utils.toArray(
    section.querySelectorAll("[data-feature-card]")
  );

  if (!cards.length) {
    return;
  }

  gsap.set(cards, {
    autoAlpha: 0,
    y: 44,
    scale: 0.97,
    force3D: true,
  });

  gsap
    .timeline({
      defaults: {
        duration: 0.78,
      },
      scrollTrigger: {
        trigger: section,
        start: "top 68%",
        toggleActions: "play none none reverse",
      },
    })
    .to(cards, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      stagger: {
        each: 0.14,
        from: "start",
      },
      overwrite: "auto",
    });
}

function setupPricingReveal() {
  const section = document.querySelector("[data-pricing-section]");

  if (!section) {
    return;
  }

  const copyItems = gsap.utils.toArray(
    section.querySelectorAll("header > strong, header > h2")
  );
  const cards = getPricingCardOrder(section);

  if (!copyItems.length && !cards.length) {
    return;
  }

  gsap.set(copyItems, {
    autoAlpha: 0,
    y: 24,
    force3D: true,
  });

  gsap.set(cards, {
    autoAlpha: 0,
    y: 48,
    scale: 0.965,
    force3D: true,
  });

  gsap
    .timeline({
      defaults: {
        duration: 0.76,
      },
      scrollTrigger: {
        trigger: section,
        start: "top 68%",
        toggleActions: "play none none reverse",
      },
    })
    .to(copyItems, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.1,
    })
    .to(
      cards,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.16,
        overwrite: "auto",
      },
      "-=0.18"
    );
}

function getPricingCardOrder(section) {
  const directCards = gsap.utils.toArray(
    section.querySelectorAll(".cards > .card")
  );
  const leftCard = directCards[0];
  const rightCard = directCards[1];
  const middleCard = section.querySelector(".premium");
  const isDesktop = window.matchMedia("(width >= 80em)").matches;

  if (isDesktop) {
    return [middleCard, rightCard, leftCard].filter(Boolean);
  }

  return [leftCard, middleCard, rightCard].filter(Boolean);
}

function clearAnimatedStyles() {
  gsap.set(
    [
      "[data-reveal='copy']",
      "[data-phone-showcase]",
      "[data-feature-card]",
      "[data-pricing-section] header > strong",
      "[data-pricing-section] header > h2",
      "[data-pricing-section] .cards > .card",
      "[data-pricing-section] .premium",
    ].join(", "),
    {
      clearProps: "all",
    }
  );
}
