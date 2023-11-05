const container = document.querySelector(".container");

function moveUp(button) {
  const box = button.closest(".box");
  const previousBox = box.previousElementSibling;
  if (previousBox) {
    container.insertBefore(box, previousBox);
  }
}

function moveDown(button) {
  const box = button.closest(".box");
  const nextBox = box.nextElementSibling;
  if (nextBox) {
    container.insertBefore(nextBox, box);
  }
}

const upButtons = document.querySelectorAll(".button.up");
const downButtons = document.querySelectorAll(".button.down");

upButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moveUp(button);
  });
});

downButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moveDown(button);
  });
});

const updateButtons = document.querySelectorAll(".update-button");
const toggleControlsButtons = document.querySelectorAll(".toggle-controls");
const controls = document.querySelectorAll(".controls");

toggleControlsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    controls[index].classList.toggle("hidden");
  });
});

updateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const box = button.closest(".box");
    const newWidth = box.querySelector(".width").value + "px";
    const newHeight = box.querySelector(".height").value + "px";
    const newBorderWidth = box.querySelector(".border-width").value + "px";
    const newAltText = box.querySelector(".alt-text").value;

    const image = box.querySelector(".pic");
    image.style.width = newWidth;
    image.style.height = newHeight;
    image.style.borderWidth = newBorderWidth;
    image.alt = newAltText;
  });
});
