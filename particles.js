const particleConfigs = [
  {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ff6e48" },
      shape: { type: "circle" },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#ff6e48", opacity: 0.8, width: 2 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 700 } },
      color: { value: "#4285F4" },
      shape: { type: "triangle" },
      size: { value: 5, random: true },
      line_linked: { enable: true, distance: 120, color: "#4285F4", opacity: 0.6, width: 1 },
      move: { enable: true, speed: 4 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 110, density: { enable: true, value_area: 850 } },
      color: { value: "#0F9D58" },
      shape: { type: "star" },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 130, color: "#0F9D58", opacity: 0.7, width: 1 },
      move: { enable: true, speed: 3.5 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#DB4437" },
      shape: { type: "polygon", polygon: { nb_sides: 6 } },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#DB4437", opacity: 0.8, width: 2 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ff6e48" },
      shape: { type: "circle" },
      size: { value: 6, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 5 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 700 } },
      color: { value: "#4285F4" },
      shape: { type: "polygon", polygon: { nb_sides: 8 } },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 160, color: "#4285F4", opacity: 0.9, width: 2 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 95, density: { enable: true, value_area: 750 } },
      color: { value: "#F4B400" },
      shape: { type: "edge" },
      size: { value: 5, random: true },
      line_linked: { enable: true, distance: 150, color: "#F4B400", opacity: 0.7, width: 1 },
      move: { enable: true, speed: 4 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 105, density: { enable: true, value_area: 800 } },
      color: { value: "#DB4437" },
      shape: { type: "triangle" },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 140, color: "#DB4437", opacity: 0.8, width: 1 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  // New configuration with multiple shapes and stroke for additional style and responsiveness
  {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 900 } },
      color: { value: "#00eaff" },
      shape: { 
        type: ["circle", "triangle", "edge", "star"], 
        stroke: { width: 1, color: "#ffffff" }
      },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 140, color: "#00eaff", opacity: 0.7, width: 1 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  }
];

const config = particleConfigs[Math.floor(Math.random() * particleConfigs.length)];
particlesJS("particles-js", config);
