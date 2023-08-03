
let container = document.querySelector("#container");

let p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue; background-color: yellow;");
container.appendChild(h3);

let div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background-color: pink;");
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);
container.appendChild(div);


