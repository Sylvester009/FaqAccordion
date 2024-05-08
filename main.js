const plus1 = document.getElementById("plus-minus1");
const plus2 = document.getElementById("plus-minus2");
const plus3 = document.getElementById("plus-minus3");
const plus4 = document.getElementById("plus-minus4");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

const plusArray = [plus1, plus2, plus3, plus4];
const textArray = [text1, text2, text3, text4];

for (let i = 0; i < plusArray.length; i++) {
  plusArray[i].addEventListener("click", () => {
    textArray[i].classList.toggle("text-active");

    const imageSrc = plusArray[i].getAttribute("src");

    if (imageSrc.includes("icon-minus.svg")) {
      plusArray[i].setAttribute("src", "assets/images/icon-plus.svg");
    } else {
      plusArray[i].setAttribute("src", "assets/images/icon-minus.svg");
    }
  });
}
