let form = document.querySelector("form");
let input1 = document.querySelector("#input-one");
let input2 = document.querySelector("#input-two");
let input3 = document.querySelector("#input-three");
let input4 = document.querySelector("#input-four");
let input5 = document.querySelector("#input-five");
let input6 = document.querySelector("#input-six");
let right = document.querySelector(".right");

let saveinfo = (e) => {
  e.preventDefault();

  let lione = document.createElement("li");
  let litwo = document.createElement("li");
  let lithree = document.createElement("li");
  let lifour = document.createElement("li");
  let lifive = document.createElement("li");
  let lisix = document.createElement("li");
  let card = document.createElement("div");
  let dbtn = document.createElement("button");
  let parent = document.createElement("div");
  // let dbtnall = document.createElement("button");
  let whatsapp = document.createElement("div");
  let phone = document.createElement("div");
  card.className = "carddiv";
  dbtn.className = "dbtn";
  dbtn.innerText = "x";
  // dbtnall.innerText = "delete";
  // dbtnall.className = "dbtnall";

  whatsapp.className = "whatsapp";
  phone.className = "phone";

  whatsapp.innerHTML = `
  <a href="https://web.whatsapp.com/send?phone=9009742061" target="_blank" >
  <i class="fa-brands fa-whatsapp"></i>
</a>
  `;
  phone.innerHTML = `
<a href="tel:+9009742061" target="_blank">
<i class="fa-solid fa-phone"></i>
</a>
`;

  card.appendChild(whatsapp);
  card.appendChild(phone);
  right.appendChild(card);
  card.appendChild(lione);
  card.appendChild(litwo);
  card.appendChild(lithree);
  card.appendChild(lifour);
  card.appendChild(lifive);
  card.appendChild(lisix);
  card.appendChild(dbtn);
  parent.appendChild(card);
  right.appendChild(parent);
  // right.appendChild(dbtnall);
  parent.className = "parent";

  lione.innerText = input1.value;
  litwo.innerText = input2.value;
  lithree.innerText = input3.value;
  lifour.innerText = input4.value;
  lifive.innerText = input5.value;
  lisix.innerText = input6.value;
  form.reset();
};

const remove = (e) => {
  if (e.target.className.includes("dbtn")) {
    e.target.parentElement.remove();
    // if(e.target.className.includes(""))
  }
};

right.addEventListener("click", remove);

form.addEventListener("submit", saveinfo);
