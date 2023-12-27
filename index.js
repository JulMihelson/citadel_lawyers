// (() => {
//   const refs = {
//     practiceButtons: document.querySelectorAll(".practice-button"),
//     closeButtons: document.querySelectorAll(".button-close"),

//     cardDevelopment: document.querySelector(".opened-practice-development"),
//     cardCorporative: document.querySelector(".opened-practice-corporative"),
//     cardTax: document.querySelector(".opened-practice-tax"),
//     cardIt: document.querySelector(".opened-practice-it"),
//   };

//   refs.practiceButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const practiceType = button.getAttribute("data-type");
//       closeAllCards();
//       toggleCard(practiceType);
//     });
//   });

//   function closeAllCards() {
//     refs.cardDevelopment.classList.add("is-hidden");
//     refs.cardCorporative.classList.add("is-hidden");
//     refs.cardTax.classList.add("is-hidden");
//     refs.cardIt.classList.add("is-hidden");
//   }

//   function toggleCard(practiceType) {
//     switch (practiceType) {
//       case "openCardDevelopment":
//         refs.cardDevelopment.classList.toggle("is-hidden");
//         break;
//       case "openCardCorporative":
//         refs.cardCorporative.classList.toggle("is-hidden");
//         break;
//       case "openCardTax":
//         refs.cardTax.classList.toggle("is-hidden");
//         break;
//       case "openCardIt":
//         refs.cardIt.classList.toggle("is-hidden");
//         break;
//     }
//   }
// })();

(() => {
  const refs = {
    openCardDevelopment: document.querySelector("#development"),
    openCardCorporative: document.querySelector("#corporative"),
    openCardTax: document.querySelector("#tax"),
    openCardIt: document.querySelector("#it"),

    closeCardDevelopment: document.querySelector(".button-close-development"),
    closeCardCorporative: document.querySelector(".button-close-corporative"),
    closeCardTax: document.querySelector(".button-close-tax"),
    closeCardIt: document.querySelector(".button-close-it"),

    cardDevelopment: document.querySelector(".opened-practice-development"),
    cardCorporative: document.querySelector(".opened-practice-corporative"),
    cardTax: document.querySelector(".opened-practice-tax"),
    cardIt: document.querySelector(".opened-practice-it"),
  };

  refs.openCardDevelopment.addEventListener("click", toggleCardDevelopment);
  refs.openCardCorporative.addEventListener("click", toggleCardCorpotrative);
  refs.openCardTax.addEventListener("click", toggleCardTax);
  refs.openCardIt.addEventListener("click", toggleCardIt);

  refs.closeCardDevelopment.addEventListener("click", toggleCardDevelopment);
  refs.closeCardCorporative.addEventListener("click", toggleCardCorpotrative);
  refs.closeCardTax.addEventListener("click", toggleCardTax);
  refs.closeCardIt.addEventListener("click", toggleCardIt);

  function toggleCardDevelopment() {
    refs.cardDevelopment.classList.toggle("is-hidden");
  }
  function toggleCardCorpotrative() {
    refs.cardCorporative.classList.toggle("is-hidden");
  }
  function toggleCardTax() {
    refs.cardTax.classList.toggle("is-hidden");
  }
  function toggleCardIt() {
    refs.cardIt.classList.toggle("is-hidden");
  }
})();
