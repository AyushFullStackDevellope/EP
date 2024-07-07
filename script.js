// Typing animation

// -------------- Aside ------------------
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();

      // Close the sidebar when clicking a navbar link
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

// JavaScript for navigation functionality
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    const target = document.querySelector(this.getAttribute("href"));
    sections.forEach((section) => section.classList.remove("active"));
    target.classList.add("active");
  });
});

function copyEmail() {
  const email = "ayushnakade**@example.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
}
function copySkype() {
  const skype = "live:.cid.6b52ae3d6f119f96";
  navigator.clipboard
    .writeText(skype)
    .then(() => {
      alert("Skype ID copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy Skype ID: ", err);
    });
}
function toggleContent(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll('.additional-box-content');

  allContents.forEach((boxContent) => {
    if (boxContent !== content) {
      boxContent.style.maxHeight = '0';
      boxContent.style.padding = '0 15px';
    }
  });

  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    content.style.padding = '0 15px';
  } else {
    // Calculate the height needed for the content plus additional 20px
    const contentHeight = content.scrollHeight + 20;
    const maxHeight = contentHeight + 'px';
    content.style.maxHeight = maxHeight;
    content.style.padding = '15px';
  }
}




