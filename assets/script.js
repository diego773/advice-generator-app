const button = document.getElementById("button-circle");

const handleClick = () => {
  // const buttonCircle = document.querySelector(".button-circle");
  if (button) {
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
      console.log("Server error: ", response);
    }
    const data = await response.json();
    displayAdvice(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

const displayAdvice = (data) => {
  adviceSectionId(data);
  adviceSectionText(data);
};

const adviceSectionId = (data) => {
  const adviceIdNumber = document.getElementById("advice-id-number");

  if (!adviceIdNumber) {
    adviceIdNumber.textContent = "";
  }
  adviceIdNumber.textContent = `Advice # ${data.slip.id}`;
};

const adviceSectionText = (data) => {
  const adviceText = document.getElementById("advice-text");

  if (!adviceText) {
    adviceText.textContent = "";
  }
  adviceText.textContent = `"${data.slip.advice}"`;
};

window.onload = getAdviceApi();
button.addEventListener("click", handleClick);
