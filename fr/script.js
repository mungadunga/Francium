const dataset = [{
   "date": [],
   "grades": [],
   "description": []
}];

Object.size = function(obj){
   let size = 0;
   for (let key in obj) if(obj.hasOwnProperty(key)) size++;
   return size;
};

let createGrade = (d1, g, d2) => {
   dataset[0].date.push(d1);
   dataset[0].grades.push(g);
   dataset[0].description.push(d2);
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
   createGrade("16.03.21", 8, "good");
// create grade <=

// create announcement =>
createAnnouncement("Exam 23-03-21!", "Don't forget to practice!", "#d11e1e");
createAnnouncement("Introducing Announcements!", "You'll see important information about Francium and your courses here!", "#336fe8");
// create announcement <=


const div = d3.select(".thing").append("div").style("display", "flex");
const date = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const grades = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const description = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const average = div.append("div").style("border", "2px solid black");
// create divs
const createDiv = (selector, insideData, extra) => selector.selectAll("div").data(dataset[0][insideData]).enter().append("div").style("border-bottom", "2px solid black").style("padding", "3px").text(d => extra ? Number.isInteger(d) ? d + " / 10": d : d);
createDiv(date, "date");
createDiv(grades, "grades", "d");
createDiv(description, "description");
// average
let newData = dataset[0].grades.slice(1);
average.selectAll("div")
.data(["Average:", `${newData.reduce((a, c) => a + c) / newData.length} / 10`])
.enter()
.append("div")
.style("margin", "3px")
.text(d => d)


