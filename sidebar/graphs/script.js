fetch("../../dataset.json")
.then(response => response.json())
.then(dataset => {
    document.querySelector(".p").innerHTML = dataset[0].date[0];
});

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

