const button = document.getElementById("button-circle");

const handleClick = () => {
  if (!getAdviceApi) {
    alert("sorry, no advice available");
  }
  return getAdviceApi();
};

const getAdviceApi = async () => {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      console.log("Server error: ", response);
    }
    const data = await response.json();
    mainContainer(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

const mainContainer = (data) => {
  const message = `Sorry no ${adviceIdSection} and no ${adviceSectionText} found.`;

  if (!adviceIdSection || !adviceSectionText) {
    return message;
  } else {
    adviceIdSection(data);
    adviceSectionText(data);
    return;
  }
};

const adviceIdSection = (data) => {
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

getAdviceApi();
button.addEventListener("click", handleClick);
