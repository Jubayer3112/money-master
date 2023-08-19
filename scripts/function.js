function getInputValue(inputId) {
  const getInput = document.getElementById(inputId);
  const getInputString = getInput.value;
  const inputData = parseFloat(getInputString);
  return inputData;
}

function setValue(elementId, result) {
  const setPath = document.getElementById(elementId);
  setPath.innerText = result;
}
