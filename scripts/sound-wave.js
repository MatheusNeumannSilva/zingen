const SVG_NS = "http://www.w3.org/2000/svg";

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll("[data-sound-wave]").forEach((image) => {
  setupSoundWave(image);
});

async function setupSoundWave(image) {
  if (motionQuery.matches) {
    return;
  }

  try {
    const response = await fetch(image.currentSrc || image.src);

    if (!response.ok) {
      throw new Error("Unable to load sound wave SVG.");
    }

    const svgText = await response.text();
    const documentSvg = new DOMParser().parseFromString(
      svgText,
      "image/svg+xml"
    );
    const sourceSvg = documentSvg.querySelector("svg");
    const sourcePath = sourceSvg?.querySelector("path[d]");
    const pathData = sourcePath?.getAttribute("d");
    const barPaths = splitCompoundPath(pathData);

    if (!sourceSvg || !sourcePath || barPaths.length < 2) {
      throw new Error("Sound wave SVG cannot be split into animated bars.");
    }

    const inlineSvg = document.importNode(sourceSvg, true);
    const inlinePath = inlineSvg.querySelector("path[d]");
    const barsGroup = document.createElementNS(SVG_NS, "g");

    inlineSvg.classList.add("sound-wave", "sound-wave__svg");
    inlineSvg.setAttribute("aria-hidden", "true");
    inlineSvg.removeAttribute("width");
    inlineSvg.removeAttribute("height");
    barsGroup.classList.add("sound-wave__bars");

    barPaths.forEach((path, index) => {
      const bar = document.createElementNS(SVG_NS, "path");

      bar.setAttribute("d", path);
      copyAttribute(sourcePath, bar, "fill");
      copyAttribute(sourcePath, bar, "fill-rule");
      copyAttribute(sourcePath, bar, "clip-rule");
      bar.style.transformBox = "fill-box";
      bar.style.transformOrigin = "center";
      bar.dataset.waveIndex = index;
      barsGroup.appendChild(bar);
    });

    inlinePath.replaceWith(barsGroup);
    image.replaceWith(inlineSvg);
    animateBars([...barsGroup.children]);
  } catch {
    animateFallback(image);
  }
}

function splitCompoundPath(pathData) {
  if (!pathData) {
    return [];
  }

  return pathData
    .split(/(?=M)/)
    .map((path) => path.trim())
    .filter(Boolean);
}

function copyAttribute(source, target, attribute) {
  if (source.hasAttribute(attribute)) {
    target.setAttribute(attribute, source.getAttribute(attribute));
  }
}

function animateBars(bars) {
  const midpoint = (bars.length - 1) / 2;
  const phases = bars.map((_, index) => index * 0.58);
  let animationFrame;

  function render(time) {
    const seconds = time / 1000;

    bars.forEach((bar, index) => {
      const distanceFromCenter = Math.abs(index - midpoint) / midpoint;
      const centerWeight = 1 - distanceFromCenter * 0.38;
      const pulse =
        Math.sin(seconds * 3.6 + phases[index]) * 0.26 +
        Math.sin(seconds * 5.4 + phases[index] * 0.7) * 0.12;
      const scale = clamp(0.58 + centerWeight * 0.28 + pulse, 0.48, 1.16);

      bar.style.transform = `scaleY(${scale.toFixed(3)})`;
    });

    animationFrame = requestAnimationFrame(render);
  }

  function handleMotionPreference() {
    if (motionQuery.matches) {
      cancelAnimationFrame(animationFrame);
      bars.forEach((bar) => {
        bar.style.transform = "";
      });
      return;
    }

    animationFrame = requestAnimationFrame(render);
  }

  motionQuery.addEventListener("change", handleMotionPreference);
  handleMotionPreference();
}

function animateFallback(image) {
  const animation = image.animate(
    [
      { transform: "scaleY(0.96)", filter: "brightness(0.96)" },
      { transform: "scaleY(1.05)", filter: "brightness(1.08)" },
      { transform: "scaleY(0.98)", filter: "brightness(1)" },
    ],
    {
      duration: 1800,
      easing: "ease-in-out",
      iterations: Infinity,
    }
  );

  motionQuery.addEventListener("change", () => {
    if (motionQuery.matches) {
      animation.cancel();
    } else {
      animation.play();
    }
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
