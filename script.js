const form = document.querySelector("#probability-form");
const groupInput = document.querySelector("#group-probability");
const itemInput = document.querySelector("#item-probability");
const resultValue = document.querySelector("#result-value");
const resultDetail = document.querySelector("#result-detail");

function clampPercentage(value) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, value));
}

function formatPercentage(value, digits = 5) {
  const formatted = value.toFixed(digits).replace(/\.?0+$/, "");
  return `${formatted}%`;
}

function calculateActualProbability() {
  const groupProbability = clampPercentage(Number(groupInput.value));
  const itemProbability = clampPercentage(Number(itemInput.value));
  const actualProbability = (groupProbability * itemProbability) / 100;

  resultValue.textContent = formatPercentage(actualProbability, 5);
  resultDetail.textContent = `${formatPercentage(groupProbability, 2)} × ${formatPercentage(itemProbability, 5)} = ${formatPercentage(actualProbability, 5)}`;
}

form.addEventListener("input", calculateActualProbability);
calculateActualProbability();
