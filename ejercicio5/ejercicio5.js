const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);

for (let album of albums) {
    const li = document.createElement("li")
    li.textContent = album;
    ul.appendChild(li);
};

