//1

const button = document.querySelector("#btnToClick");

button.addEventListener("click", (event) => {
    button.textContent = "pínchame";
    console.log(event);
})

//2

const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
    inputFocus.value = "holi";
    console.log(inputFocus.value);
})

// 3
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => {
    console.log(inputValue.value);
}) 

//
