document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('[data-type="extra"]');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  inputs.forEach((element) => {
    element.addEventListener("focusout", () => {
      if (!element.value) {
        element.style = `
				border: ${styles.border} ${styles.red};
			`;
      }
      if (
        element.value &&
        element.type === "email" &&
        !element.value.match(emailRegex)
      ) {
        element.style = `
				  border: ${styles.border} ${styles.red};
			`;
      } else {
        element.style = `
				  border: ${styles.border} ${styles.green};
			`;
      }
    });

    element.addEventListener("click", () => {
      element.style = `
			  border: auto;
		`;
    });
  });
});

const styles = {
  red: `#ff3d22`,
  green: `#2fbb12`,
  border: `5px solid`,
};
