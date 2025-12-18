// mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // toggle icon
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

// close ketika klik menu navbar mobile
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  });
});

// close ketika klik di mana saja selain di navbar mobile
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});

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

const backToTop = document.getElementById("backToTop");

// tampil / sembunyikan saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("invisible", "opacity-0");
    backToTop.classList.add("opacity-100");
  } else {
    backToTop.classList.add("invisible", "opacity-0");
    backToTop.classList.remove("opacity-100");
  }
});

// klik scroll ke atas
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
});
