// dataset
const dataset = [{
   "date": [],
   "grades": [],
   "description": [],
   "coef": []
}];

// setup

Object.size = function(obj){
   let size = 0;
   for (let key in obj) if(obj.hasOwnProperty(key)) size++;
   return size;
};

let createGrade = (date, grade, description, coef) => {
   dataset[0].date.push(date);
   dataset[0].grades.push(grade);
   dataset[0].description.push(description);
   Array.from({length: coef}, () => dataset[0].coef.push(grade));
};

let createAnnouncement = (title, content, color) => {
   let divi = document.createElement("div");
   divi.classList.add("announcement");
   let one = document.createElement("p");
   one.classList.add("title");
   let oneContent = document.createTextNode(title);
   one.style.backgroundColor = color;
   let two = document.createElement("p");
   two.classList.add("desc")
   let twoContent = document.createTextNode(content);
   one.appendChild(oneContent);
   two.appendChild(twoContent);
   divi.appendChild(one);
   divi.appendChild(two);
   document.getElementById("annbar").appendChild(divi);
};


// create grade =>
   createGrade("Date", "Grade:", "Description:");
   // add grades here
   createGrade("24.03", 5.75, "Conjugaison", 1);
   createGrade("24.03", 9, "Production Ecrite", 2);
   createGrade("16.03", 8, "Compréhension", 1);
// create grade <=

// create announcement =>



// create announcement <=
if(!document.querySelector("#annbar").hasChildNodes()) {
   let box = document.createElement("div");
   let text = document.createTextNode("No recent announcements!");
   box.classList.add("noAnnouncementClass");
   box.appendChild(text);
   document.getElementById("annbar").appendChild(box);
};


const div = d3.select(".thing").append("div").style("display", "flex");
const date = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const grades = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const description = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const average = div.append("div").style("border", "2px solid black");
// create divs
const createDiv = (selector, insideData, extra) => selector.selectAll("div").data(dataset[0][insideData]).enter().append("div").style("border-bottom", "2px solid black").style("padding", "3px").text(d => extra ? Number.isInteger(d * 100) ? d + " / 10": d : d);
createDiv(date, "date");
createDiv(grades, "grades", "d");
createDiv(description, "description");
// average
let newData = dataset[0].coef;
let roundToHundredth = value => Number(value.toFixed(2));
average.selectAll("div")
.data(["Average:", `${roundToHundredth(newData.reduce((a, c) => a + c) / newData.length)} / 10`])
.enter()
.append("div")
.style("margin", "3px")
.text(d => d)


