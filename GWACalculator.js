document
  .querySelector(".js-add-more-subjects")
  .addEventListener("click", () => {
    const container = document.querySelector(".container");

    const newInputs = document.createElement("div");
    newInputs.classList.add("inputs-removeBTN");

    newInputs.innerHTML = `
      <input type="text" placeholder="Grade" class="grade-input js-grade" />
      <input type="text" placeholder="Unit" class="unit-input js-unit" />
      <button class="remove js-remove-button">Remove</button>
    `;

    const calculateButton =
      document.querySelector(".js-calculate").parentElement;
    container.insertBefore(newInputs, calculateButton);
  });

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    event.target.parentElement.remove();
  }
});

let name;
const nameInput = document.getElementById("name");
let displayedResult = 0;

document.querySelector(".js-calculate").addEventListener("click", () => {
  nameModal.style.display = "block";
  const finalGrades = document.querySelectorAll(".js-grade");
  const totalUnits = document.querySelectorAll(".js-unit");
  let weightedSum = 0;
  let totalUnitSum = 0;

  finalGrades.forEach((grade, index) => {
    const gradeValue = parseFloat(grade.value);
    const unitValue = parseFloat(totalUnits[index].value);

    if (!isNaN(gradeValue) && !isNaN(unitValue)) {
      weightedSum += gradeValue * unitValue;
      totalUnitSum += unitValue;
    }

    const result = totalUnitSum ? (weightedSum / totalUnitSum).toFixed(2) : 0;
    displayedResult = result;
  });
});

const GWA = document.getElementById("GWA");

document.getElementById("confirmBTN").addEventListener("click", () => {
  const congratsText = document.getElementById("congrats");

  name = nameInput.value;
  congratsModal.style.display = "block";

  congratsText.textContent = `Congratulations, ${name}! 🎉`;
  GWA.textContent = `Your GWA is ${displayedResult}`;
});

document.getElementById("closeBTN").addEventListener("click", () => {
  congratsModal.style.display = "none";
  nameModal.style.display = "none";
});

document.getElementById("skipBTN").addEventListener("click", () => {
  congratsModal.style.display = "block";
  GWA.textContent = `Your GWA is ${displayedResult}`;
});
