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
        allSection[j]?.classList.add("back-section");
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
// JS For Toggle Button Functionality
function toggleContent(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll(".additional-box-content");

  allContents.forEach((boxContent) => {
    if (boxContent !== content) {
      boxContent.style.maxHeight = "0";
      boxContent.style.padding = "0 15px";
    }
  });

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    content.style.padding = "0 15px";
  } else {
    const contentHeight = content.scrollHeight + 20;
    const maxHeight = contentHeight + "px";
    content.style.maxHeight = maxHeight;
    content.style.padding = "15px";
  }
}
// Function for feedback alert
function myFunction() {
  alert("Thank you for your valuable feedback ");
}

// function for search bar

function filterStudents() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    const studentName = item.getAttribute("data-student").toLowerCase();
    if (studentName.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function closeSlide() {
  // Replace with your logic to close the slide
  document.getElementById('slideContainer').style.display = 'none';
}

function filterStudents() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const portfolioItems = document.getElementById('portfolioItems').getElementsByClassName('portfolio-item');

  for (let i = 0; i < portfolioItems.length; i++) {
    const studentName = portfolioItems[i].getAttribute('data-student').toLowerCase();
    if (studentName.includes(searchInput)) {
      portfolioItems[i].style.display = '';
    } else {
      portfolioItems[i].style.display = 'none';
    }
  }
}

function showPhase(phase) {
  // Toggle visibility of tables and icons based on the selected phase
  var tables = document.querySelectorAll('.phase-table');
  var icons = document.querySelectorAll('.phase-icons');
  
  // Hide all tables and icons
  tables.forEach(function(table) {
    table.style.display = 'none';
  });
  icons.forEach(function(icon) {
    icon.style.display = 'none';
  });
  
  // Show the selected phase's table and icons
  document.getElementById(phase + '-table').style.display = 'block';
  document.getElementById(phase + '-icons').style.display = 'block';

  // Scroll to the table on small devices
  if (window.innerWidth < 768) { // Adjust the breakpoint as per your design needs
    var tableElement = document.getElementById(phase + '-table');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}



