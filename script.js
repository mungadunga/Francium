// dataset
const dataset = [{
   "date": [],
   "grades": [],
   "description": [],
   "coef": []
}];

// setup

let createAnnouncement = (title, content, color) => {
   let divi = document.createElement("div");
   divi.classList.add("announcement");
   let one = document.createElement("p");
   one.classList.add("title");
   let oneContent = document.createTextNode(title);
   one.style.backgroundColor = color;
   one.style.padding = "5px 20px 5px 20px";
   let two = document.createElement("p");
   two.classList.add("desc")
   let twoContent = document.createTextNode(content);
   one.appendChild(oneContent);
   two.appendChild(twoContent);
   divi.appendChild(one);
   divi.appendChild(two);
   document.getElementById("annbar").appendChild(divi);
};




// create announcement =>
createAnnouncement("New update to Francium!", "Do you like it?", "#20de1d");
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



