document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector('[aria-controls="menu-drawer"]');
  const [_, searchIcon] = document.querySelectorAll(".header__icon--search");
  const cartIcon = document.querySelector("#cart-icon-bubble");
  const cartIndicator = document.querySelector(
    "#cart-icon-bubble > .cart-count-bubble"
  );
  const cartIndicatorContent = document.querySelector(
    "#cart-icon-bubble > .cart-count-bubble > span"
  );

  menuIcon.appendChild(createElement("menu", "menu-label"));
  searchIcon.appendChild(createElement("search", "search-label"));
  cartIcon.appendChild(createElement("cart", "cart-label"));

  const menuIconLabel = document.querySelector("#menu-label");
  const searchIconLabel = document.querySelector("#search-label");
  const cartIconLabel = document.querySelector("#cart-label");

  const wrapperStyle = `
	  position: relative;
  `;

  const labelStlye = `
    position: absolute;
    font-size: 10px;
    top: 22px;
    text-transform: uppercase;
  `;

  menuIcon.style = wrapperStyle;

  searchIcon.style = wrapperStyle;

  cartIcon.style = wrapperStyle;

  menuIconLabel.style = `
    ${labelStlye}
    left: 7px;
  `;

  searchIconLabel.style = labelStlye;

  cartIconLabel.style = labelStlye;

  cartIndicator.style = `
    width: 7px;
    height: 7px;
    background-color: #488A20;
    top: 11px;
    left: 27px;
    position: absolute;
    border-radius: 50%;
  `;

  cartIndicatorContent.style = `
    display: none;
  `;
});

const createElement = (text = "", id) => {
  const element = document.createElement("span");
  element.innerHTML = text;
  element.setAttribute("id", id);

  return element;
};
