fetch("../../dataset.json")
.then(response => response.json())
.then(dataset => {
    // div setup
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

    // average setup
    let roundToHundredth = value => Number(value.toFixed(2));
    dataset[0].grades.shift();
    let gradeArr = dataset[0].grades;
    let coefArr = dataset[0].coef;
    let newArr = [];

    // average calculator
    gradeArr.map((x, i) => Array.from({length: coefArr[i]}, () => newArr.push(x)));
    average.selectAll("div")
    .data(["Average:", `${roundToHundredth(newArr.reduce((a, c) => a + c) / newArr.length)} / 10`])
    .enter()
    .append("div")
    .style("margin", "3px")
    .text(d => d)
});

// open sidebar
document.querySelector(".sidebar-button").addEventListener("click", e => {
    let s = document.querySelector("#header-sidenav").style;
    s.width = "250px";
    s.borderRight = "5px solid #7289da";
});
// close sidebar 
document.querySelector(".x-button").addEventListener("click", e => {
    let s = document.querySelector("#header-sidenav").style;
    s.width = "0px";
    s.borderRight = "0px solid #7289da";
});