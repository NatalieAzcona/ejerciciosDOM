const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divPrint = document.querySelector(`[data-function="printHere"]`);

const ul = document.createElement("ul");
divPrint.appendChild(ul);

for (let place of places) {
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
}
