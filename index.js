(() => {
  const refs = {
    openCard: document.querySelector("#development"),
    closeCard: document.querySelector(".button-close"),
    card: document.querySelector(".opened-practice"),
  };

  refs.openCard.addEventListener("click", toggleCard);
  refs.closeCard.addEventListener("click", toggleCard);
  refs.card.addEventListener("transitionend", () => {
    if (card.style.height !== "0px") {
      card.style.height = "auto";
    }
  });
  function toggleCard() {
    if (refs.card.style.height === "0px") {
      refs.card.style.height = "370px";
    } else {
      refs.card.style.height = "370px";
      window.getComputedStyle(refs.card, null).getPropertyValue("height");
      refs.card.style.height = "0";
    }
  }
})();
