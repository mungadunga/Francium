let createAnnouncement = (title, content, backColor, fontColor) => {
   let divi = document.createElement("div");
   divi.classList.add("announcement");

   let one = document.createElement("p");
   one.classList.add("title");
   one.style.backgroundColor = backColor;
   one.style.padding = "5px 20px 5px 20px";
   one.style.color = fontColor;
   
   let two = document.createElement("p");
   two.classList.add("desc")

   let twoContent = document.createTextNode(content);
   let oneContent = document.createTextNode(title);

   one.appendChild(oneContent);
   two.appendChild(twoContent);
   divi.appendChild(one);
   divi.appendChild(two);
   document.getElementById("annbar").appendChild(divi);
};




// create announcement =>
createAnnouncement("New redesign to grades section!", "Seeing your grades is now easier than ever!", "rgb(220, 255, 94)", "black");
// create announcement <=

if(!document.querySelector("#annbar").hasChildNodes()) {
   let box = document.createElement("div");
   let text = document.createTextNode("No recent announcements!");
   box.classList.add("noAnnouncementClass");
   box.appendChild(text);
   document.getElementById("annbar").appendChild(box);
};

// sidebar
document.querySelector(".sidebar-button").addEventListener("click", e => {
   let s = document.querySelector("#header-sidenav").style;
   s.width = "250px";
   s.borderRight = "5px solid #7289da";
});

document.querySelector(".x-button").addEventListener("click", e => {
   let s = document.querySelector("#header-sidenav").style;
   s.width = "0px";
   s.borderRight = "0px solid #7289da";
});



