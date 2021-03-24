// login
let start = () => {
   let a = document.createElement("a");
   a.setAttribute("href", "./fr/main.html");
   a.classList.add("myA");
   let button = document.createElement("button");
   let node = document.createTextNode("Click here to start!");
   button.appendChild(node);
   a.appendChild(button);

   return document.querySelector(".myA") ? '' : document.querySelector("body").appendChild(a);
}

document.querySelector(`.login`).addEventListener("click", e => {
   let value = document.querySelector(`.input`).value;
   const login = new Promise((resolve, reject) => {
      value = value.split(" ").join("");
      if(value.toLowerCase() == "lara") return resolve(start());
      else reject(alert("Incorrect Username"));
   });
});