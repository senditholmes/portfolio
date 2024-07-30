var aboutmeSection = document.querySelector("#nicetomeetyou");
var educatorSection = document.querySelector("#educator");
var teamUpSection = document.querySelector("#teamup");
let options = {
    rootMargin: "0px",
    threshold: 0.5,
};
var observer = new IntersectionObserver(handleIntersection, options);
observer.observe(aboutmeSection);
observer.observe(educatorSection);
observer.observe(teamUpSection);
function handleIntersection(entries) {
    entries.forEach((entry) => { });
}
export {};
//# sourceMappingURL=scripts.js.map