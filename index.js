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

  refs.openCardDevelopment.addEventListener("click", toggleCard);
  refs.openCardCorporative.addEventListener("click", toggleCard);
  refs.openCardTax.addEventListener("click", toggleCard);
  refs.openCardIt.addEventListener("click", toggleCard);

  refs.closeCardDevelopment.addEventListener("click", toggleCard);
  refs.closeCardCorporative.addEventListener("click", toggleCard);
  refs.closeCardTax.addEventListener("click", toggleCard);
  refs.closeCardIt.addEventListener("click", toggleCard);

  function toggleCard() {
    refs.cardDevelopment.classList.toggle("is-hidden");
    refs.cardCorporative.classList.toggle("is-hidden");
    refs.cardTax.classList.toggle("is-hidden");
    refs.cardIt.classList.toggle("is-hidden");
  }
})();
