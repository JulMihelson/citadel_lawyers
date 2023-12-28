// (() => {
//   const refs = {
//     closeCardDevelopment: document.querySelector(".button-close-development"),
//     closeCardCorporative: document.querySelector(".button-close-corporative"),
//     closeCardTax: document.querySelector(".button-close-tax"),
//     closeCardIt: document.querySelector(".button-close-it"),

//     cardDevelopment: document.querySelector(".opened-practice-development"),
//     cardCorporative: document.querySelector(".opened-practice-corporative"),
//     cardTax: document.querySelector(".opened-practice-tax"),
//     cardIt: document.querySelector(".opened-practice-it"),
//   };

//   refs.closeCardDevelopment.addEventListener("click", closeDevelopment);
//   refs.closeCardCorporative.addEventListener("click", closeCorporative);
//   refs.closeCardTax.addEventListener("click", closeTax);
//   refs.closeCardIt.addEventListener("click", closeIt);

//   function closeDevelopment() {
//     refs.cardDevelopment.style.display = "none";
//   }

//   function closeCorporative() {
//     refs.cardCorporative.style.display = "none";
//   }

//   function closeTax() {
//     refs.cardTax.style.display = "none";
//   }

//   function closeIt() {
//     refs.cardIt.style.display = "none";
//   }
// })();
(() => {
  const refs = {
    closeCardDevelopment: document.querySelector(".button-close-development"),
    closeCardCorporative: document.querySelector(".button-close-corporative"),
    closeCardTax: document.querySelector(".button-close-tax"),
    closeCardIt: document.querySelector(".button-close-it"),

    cardDevelopment: document.querySelector("#development"),
    cardCorporative: document.querySelector("#corporative"),
    cardTax: document.querySelector("#tax"),
    cardIt: document.querySelector("#it"),
  };

  refs.closeCardDevelopment.addEventListener("click", toggleCardDevelopment);
  refs.closeCardCorporative.addEventListener("click", toggleCardCorporative);
  refs.closeCardTax.addEventListener("click", toggleCardTax);
  refs.closeCardIt.addEventListener("click", toggleCardIt);

  function toggleCardDevelopment() {
    toggleDisplay(refs.cardDevelopment);
  }

  function toggleCardCorporative() {
    toggleDisplay(refs.cardCorporative);
  }

  function toggleCardTax() {
    toggleDisplay(refs.cardTax);
  }

  function toggleCardIt() {
    toggleDisplay(refs.cardIt);
  }

  function toggleDisplay(element) {
    const currentDisplay = window.getComputedStyle(element).display;
    element.style.display = currentDisplay === "none" ? "block" : "none";
  }
})();
