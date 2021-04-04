fetch("../../dataset.json")
.then(response => response.json())
.then(dataset => {

    // grade list
    const main = d3.select(".main");
    const grades = dataset[0].grades;
    const category = dataset[0].category;
    const date = dataset[0].date;

    main.append("div")
    .selectAll("div")
    .data(grades)
    .enter()
    // category title
    .append("div")
    .text((_, i) => category[i])
    .attr("class", "grade")
    // date
    .append("div")
    .text((_, i) => `le ${date[i]}`)
    .attr("class", "grade-date")

    // border color
    document.querySelectorAll(".grade").forEach((elem, i) => {
        let obj = {
            "Grammaire": "5px solid red",
            "Travail de classe": "5px solid blue",
            "Production écrite": "5px solid green",
            "Compréhension": "5px solid #fcba03",
        }
        elem.style.borderLeft = obj[category[i]];
    });

    // modal
    let modal = document.querySelector('#myModal');
    let gradeBtn = document.querySelectorAll(".grade");
    let span = document.querySelector(".close-modal");

    gradeBtn.forEach((elem, i) => elem.addEventListener('click', _ => {
        modal.style.display = "block";
        document.querySelector('.modal-content-header').innerHTML = `${dataset[0].category[i]} - Note du ${dataset[0].date[i]}`;
        document.querySelector('.modal-content-description').innerHTML = dataset[0].description[i];
        document.querySelector('.modal-content-grade').innerHTML = `${dataset[0].grades[i]} / 10`;
        document.querySelector('.modal-content-coef').innerHTML = dataset[0].coef[i];
    }));
    span.addEventListener('click', _ => modal.style.display = "none");
    window.addEventListener('click', e => e.target == modal ? modal.style.display = "none" : 'error');

    // average
    let roundToHundredth = value => Number(value.toFixed(2));
    let average = [];

    dataset[0].grades.map((x, i) => Array.from({length: dataset[0].coef[i]}, () => average.push(x)));
    average = roundToHundredth(average.reduce((a, c) => a + c) / average.length);
    document.querySelector(".average-num").innerHTML = `${average} / 10`;

    // extra styles
    let g = average * 255 / 10;
    let r = 255 - g;
    document.querySelector(".average-title").style.borderTop = `10px solid rgb(${r}, ${g}, 0)`
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