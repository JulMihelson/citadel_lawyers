const refs = {
  contentCard: document.querySelector(".tab-content"),
  tabLink: document.querySelectorAll(".tab-link"),
  // cardDevelopment: document.querySelector("#development"),
  //   cardCorporative: document.querySelector("#corporative"),
  //   cardTax: document.querySelector("#tax"),
  //   cardIt: document.querySelector("#it"),
  // closeCardDevelopment: document.querySelector("#development"),
  // closeCardCorporative: document.querySelector("#corporative"),
  // closeCardTax: document.querySelector("#tax"),
  // closeCardIt: document.querySelector("#it"),
};
// window.addEventListener("click", closeCard);
refs.tabLink.forEach((element) => {
  element.addEventListener("click", navClick);
});
// refs.closeCardDevelopment.addEventListener("click", closeCard);
// refs.closeCardCorporative.addEventListener("click", closeCard);
// refs.closeCardTax.addEventListener("click", closeCard);
// refs.closeCardIt.addEventListener("click", closeCard);
let activeTab = null;

function navClick(event) {
  event.preventDefault();
  console.log(
    "navLink",
    event.target,
    event.currentTarget,
    event.currentTarget
  );
}
window.document;
function closeCard(event) {
  const target = event.target;
  if (target === refs.contentCard) {
  }
  console.log(target, "target");
  console.log(event.currentTarget);
  console.log(refs.contentCard, "contentCard");
  console.log(window.document, "wind");
}

// () => {
//   const refs = {
//     card: document.querySelector(".tab-link"),
//   };
//   for (let i = 0; i < refs.card.length; i++) {
//     card[i].addEventListener("click", () => {
//       this.classList.toggle("active");
//       let content = this.nextElementSibling;
//       if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//       } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//       }
//     });
//   }
// };
