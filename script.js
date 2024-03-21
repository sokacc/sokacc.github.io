///////////////////////////////////////////////////////////
// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK

/* const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
}); */

///////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
/* const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
}); */
/////////////////////////////////////////////////////////
//FAQ SECTION DROPDOWN

const faqQuestions = document.querySelectorAll(".faq-q");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const dropdownIcon = question.querySelector(".dropdown-icon");

    // Toggle visibility of answer
    answer.classList.toggle("show-more");

    // Close other answers
    closeOtherAnswers(question);

    // Toggle dropdown icon rotation
    dropdownIcon.classList.toggle("rotate180");
  });
});

function closeOtherAnswers(currentQuestion) {
  faqQuestions.forEach((question) => {
    if (question !== currentQuestion) {
      const answer = question.nextElementSibling;
      const dropdownIcon = question.querySelector(".dropdown-icon");

      answer.classList.remove("show-more");
      dropdownIcon.classList.remove("rotate180");
    }
  });
}
