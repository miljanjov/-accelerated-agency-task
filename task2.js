document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    const cartDrawerButton = document.querySelector(".cart-drawer_foot-button");

    const cardIconsElement = document.createElement("img");

    cardIconsElement.setAttribute("class", "card__icons");
    cardIconsElement.src =
      "https://res.cloudinary.com/da04dgows/image/upload/v1659102874/tasks/payment_method_gduu19.png";

    cartDrawerButton.appendChild(cardIconsElement);

  }, 200);
});


.card__icons {
	width: 100%;
}