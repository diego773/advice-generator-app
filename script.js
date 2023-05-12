const button = document.querySelector(".button-circle");

const handleClick = () => {
  if (!button) {
    button.classList.remove("active");
  }
  button.classList.add("active");
  getAdviceApi();
};

const getAdviceApi = async () => {
  const url = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();
    displayAdvice(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const displayAdvice = (data) => {
  adviceSectionId(data);
  adviceSectionText(data);
};

const adviceSectionId = (data) => {
  const adviceIdNumber = document.querySelector(".advice-id-number");

  if (!adviceIdNumber) {
    adviceIdNumber.textContent = "";
  }
  adviceIdNumber.textContent = `Advice # ${data.slip.id}`;
};

const adviceSectionText = (data) => {
  const adviceText = document.querySelector(".advice-text");

  if (!adviceText) {
    adviceText.textContent = "";
  }
  adviceText.textContent = `"${data.slip.advice}"`;
};

window.onload = getAdviceApi();
button.addEventListener("click", handleClick);
