// mobile menu togle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// close ketiika klik menu navbar mobile
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// close ketika klik di mana saja selain di navbar mobile
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }
});

// tulisan bergerak
const typingTexts = ["Full Stack Developer", "Cyber Security", "Web3"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
  const currentText = typingTexts[textIndex];
  const typingElement = document.getElementById("typingText");

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else {
      typingSpeed = 100;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
      typingSpeed = 500;
    }
  }

  setTimeout(typeText, typingSpeed);
}
typeText();

// navbar aktif sesuai section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav-active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("nav-active");
    }
  });
});

// navbar fix dan back to top
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "";
    navbar.style.backdropFilter = "";
  }

  // back to top button
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.add("opacity-0", "invisible");
    backToTop.classList.remove("opacity-100", "visible");
  }
});

// Back to top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// smooth scroll link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 3 tabs portfolio
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
    AOS.refresh();
  });
});

// sementara form submit menghilangkan text dan menampilkan pesan terkirim 
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formMessage = document.getElementById("formMessage");
  formMessage.classList.remove("hidden");
  formMessage.classList.add("glass", "border", "border-sky-500/30", "sky-text");
  formMessage.textContent =
    "✨ Message sent successfully! I'll get back to you soon.";
  e.target.reset();

  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 5000);
});

// backgroun musik
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

backgroundMusic.volume = 0.3;

musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicIcon.classList.remove("fa-music");
    musicIcon.classList.add("fa-pause");
    musicToggle.classList.add("bg-sky-600");
  } else {
    backgroundMusic.pause();
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-music");
    musicToggle.classList.remove("bg-sky-600");
  }
});

window.addEventListener("load", () => {
  musicIcon.classList.remove("fa-music");
  musicIcon.classList.add("fa-pause");
  musicToggle.classList.remove("bg-sky-600");
  backgroundMusic.play().catch((error) => {
    console.log("Auto-play was prevented:", error);
  });
});

// aos intalasi
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
});
