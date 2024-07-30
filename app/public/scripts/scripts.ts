// // DOM ELEMENTS
// var aboutmeSection = document.querySelector("#aboutme");
// var educatorSection = document.querySelector("#educator");
// var teamUpSection = document.querySelector("#teamup");

// // INTERSECTION
// let options = {
//   rootMargin: "0px",
//   threshold: 0.5,
// };
// var observer = new IntersectionObserver(handleIntersection, options);

// observer.observe(aboutmeSection);
// observer.observe(educatorSection);
// observer.observe(teamUpSection);

// // HANDLERS
// function handleIntersection(entries: IntersectionObserverEntry[]) {
//   entries.forEach((entry: IntersectionObserverEntry) => {
//     if (entry.isIntersecting) {
//       console.log(`${entry.target.id} is intersecting`);
//     } else {
//       console.log(`${entry.target.id} is not intersecting`);
//     }
//   });
// }
