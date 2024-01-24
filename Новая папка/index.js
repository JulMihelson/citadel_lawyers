// const refs = {
//   contentCard: document.querySelector(".tab-content"),
//   tabLink: document.querySelectorAll(".tab-link"),
// };

// refs.tabLink.forEach((element) => {
//   element.addEventListener("click", navClick);
// });

// let activeTab = null;

// function navClick(event) {
//   event.preventDefault();
//   console.log(
//     "navLink",
//     event.target,
//     event.currentTarget,
//     event.currentTarget
//   );
// }
// window.document;
// function closeCard(event) {
//   const target = event.target;
//   if (target === refs.contentCard) {
//   }
//   console.log(target, "target");
//   console.log(event.currentTarget);
//   console.log(refs.contentCard, "contentCard");
//   console.log(window.document, "wind");
// }
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById(".video-bg");

  document.addEventListener("click", function playVideo() {
    video.play();
    document.removeEventListener("click", playVideo);
  });
});
