const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-generator");
const hexCopyBtn = document.querySelector(".hex-copy-Color");
//create random hex color

hexBtn.addEventListener("click", createhexcolor);

function createhexcolor() {
  let characterSet = "0123456789ABCDEF";

  let hexColorOutput = "";

  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;

  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.backgroundColor = `#${hexColorOutput}`;
  hexCopyBtn.style.backgroundColor = `#${hexColorOutput}`;

  console.log(hexColorOutput);
}

//rgb colorgeneartor

const rgbBtn = document.querySelector("#rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-geneator");
const rgbCopyBtn = document.querySelector(".rgb-copy-Color");
const rgbColorValue = document.querySelector(".rgb-color-value");
rgbBtn.addEventListener("click", createRgbColor);

function createRgbColor() {
  let extractRedvalue = getRedInputRange.value;
  let extractGreenvalue = getGreenInputRange.value;
  let extractBluevalue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedvalue}, ${extractGreenvalue},${extractBluevalue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedvalue}, ${extractGreenvalue},${extractBluevalue})`;
  rgbBtn.style.backgroundColor = `rgb(${extractRedvalue}, ${extractGreenvalue},${extractBluevalue})`;
  rgbCopyBtn.style.backgroundColor = `rgb(${extractRedvalue}, ${extractGreenvalue},${extractBluevalue})`;
}

///copy to clip board

function copyHexColorToClipboard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is copied to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipboard);

//rgb copy

function copyRgbColorToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is copied to clipboard");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipboard);
