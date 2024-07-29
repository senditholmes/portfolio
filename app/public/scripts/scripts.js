var aboutMeSection = document.querySelector("#aboutme-section");
var scrollbar = document.querySelector("#scrollbar");
let options = {
    rootMargin: "0px",
    threshold: 0.9,
};
var aboutMeObserver = new IntersectionObserver(handleIntersection, options);
aboutMeObserver.observe(aboutMeSection);
function handleIntersection(entries) {
    return;
}
export {};
//# sourceMappingURL=scripts.js.map