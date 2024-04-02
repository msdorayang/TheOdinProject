const container = document.querySelector("#container");

const P = document.createElement("p");
P.style.color="red";
P.textContent = "Hey I'm red!";

const heading3 = document.createElement("h3");
heading3.style.color="blue";
heading3.textContent = "I'm a blue h3!";

container.appendChild(P);

container.appendChild(heading3);

const content = document.createElement("div");
content.style.backgroundColor="pink";
content.style.border="black solid";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

const innerP = document.createElement("p");
innerP.textContent= "Me Too!";

content.appendChild(heading1);
content.appendChild(innerP);
container.appendChild(content);