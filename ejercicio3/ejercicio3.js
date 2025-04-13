//1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const body = document.body;
const list = document.createElement("ul");

for (let country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    list.appendChild(li); 
};

body.appendChild(list);

//2
document.querySelectorAll('.fn-remove-me').forEach(element => {element.remove()});

//3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const container = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');
for (let car of cars) {
    const li = document.createElement('li');
    li.textContent = car; 
    ul.appendChild(li);   
}
container.appendChild(ul);


//4 y 6
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let country of countries2) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = country.title;
    const img = document.createElement("img");
    img.src = country.imgUrl; 

    const buttonDelThis = document.createElement("button");
    buttonDelThis.textContent = "Eliminar este";

    buttonDelThis.addEventListener("click", () => {
        div.remove(); 
    });

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(buttonDelThis);
    document.body.appendChild(div);
}

//5
const buttonDel = document.createElement("button");
buttonDel.textContent = "eliminar último";
buttonDel.id = "buttonDel";

document.body.prepend(buttonDel);

buttonDel.addEventListener("click", () => {
    const divs = document.querySelectorAll("body > div:not([data-function='printHere'])")
    const lastCard = divs[divs.length - 1];
    if (lastCard) {
        lastCard.remove();
    }
});

