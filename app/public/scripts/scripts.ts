// animate in different sections
// animate in the menu buttons at the top
// animate in the repos
// animate in the contact form

var aboutMeSection = document.querySelector("#aboutme-section");
var scrollbar = document.querySelector("#scrollbar");

let options = {
  rootMargin: "0px",
  threshold: 0.9,
};

var aboutMeObserver = new IntersectionObserver(handleIntersection, options);
aboutMeObserver.observe(aboutMeSection);

function handleIntersection(entries: any) {
  return;
}
