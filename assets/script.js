const button = document.querySelector(".button-circle");

const handleClick = () => {
  getAdviceApi();
  console.log("click");
};

const getAdviceApi = async (advice) => {
  const apiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(apiUrl);
    if (response.status !== 200) {
      console.log("Server error: ", response);
    }
    const data = await response.json();
    mainContainer(data);
    console.log("data", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

const mainContainer = (advice) => {
  adviceIdSection(advice);
  adviceSectionText(advice);
};

const adviceIdSection = (data) => {
  const adviceIdNumber = document.querySelector(".advice-id-number");
  adviceIdNumber.textContent = `Advice # ${data.slip.id}`;
};

const adviceSectionText = (text) => {
  const adviceText = document.querySelector(".advice-text");
  adviceText.textContent = text.slip.advice;
};

getAdviceApi("advice");
button.addEventListener("click", handleClick);
