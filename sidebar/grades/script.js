// dataset
const dataset = [{
    "date": [],
    "grades": [],
    "description": [],
    "coef": []
}];

// setup
let createGrade = (date, grade, description, coef) => {
    dataset[0].date.push(date);
    dataset[0].grades.push(grade);
    dataset[0].description.push(description);
    Array.from({length: coef}, () => dataset[0].coef.push(grade));
};



// create grade =>
    createGrade("Date", "Grade:", "Description:");
    // add grades here
    createGrade("27.03", 8.5, "Dossier 3 Leçon 2", 1);
    createGrade("26.03", 9, "Dossier 3 Leçon 1", 1);
    createGrade("25.03", 8.8, "Dossier 2 Leçon 3", 1);
    createGrade("24.03", 5.75, "Conjugaison", 2);
    createGrade("24.03", 9, "Production Ecrite", 3);
    createGrade("16.03", 8, "Compréhension", 2);
// create grade <=




const div = d3.select(".thing").append("div").style("display", "flex");
const date = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const grades = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const description = div.append("div").style("border", "2px solid black").style("border-right", "none").style("border-bottom", "none");
const average = div.append("div").style("border", "2px solid black");
// create divs
const createDiv = (selector, insideData, extra) => selector.selectAll("div").data(dataset[0][insideData]).enter().append("div").style("border-bottom", "2px solid black").style("padding", "3px").text(d => extra && typeof d === "number" ? `${d} / 10`: d);
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