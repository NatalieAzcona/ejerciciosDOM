
// 1
const container = document.querySelector(".fn-insert-here");
const div1 = document.createElement("div");
container.appendChild(div1);

//2
const div2 = document.createElement("div");
const p = document.createElement("p");
container.appendChild(div2);
div2.appendChild(p);

//3
const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p6 = document.createElement("p");
    div3.appendChild(p6);
}

container.appendChild(div3);

//4 (Ya he reado div1, asi que lo asigno alli)
const pDinamic = document.createElement("p");
pDinamic.textContent = "soy dinámico";
div1.appendChild(pDinamic);

//5
const h2InsertHere = document.querySelector("h2.fn-insert-here");
h2InsertHere.textContent = "Wubba Lubba dub dub";

//6
const ul = document.createElement("ul");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let word of apps) {
    const li = document.createElement("li");
    li.textContent = word;
    ul.appendChild(li);
};

//7
document.querySelectorAll('.fn-remove-me').forEach(element => {element.remove()}); 

//8

const newP = document.createElement('p');
newP.textContent= "Voy en medio";

const body = document.body;
const secondDiv = body.querySelectorAll('div')[1];

body.insertBefore(newP, secondDiv);

//9
const insideP = document.createElement('p');
insideP.textContent = "voy dentro!"

const divInsert = document.querySelectorAll('.fn-insert-here');



