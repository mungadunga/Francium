fetch("../../dataset.json")
.then(response => response.json())
.then(dataset => {

    // setup
    dataset[0].grades.shift();
    let roundToHundredth = value => Number(value.toFixed(2));

    // average calculator
    let average = [];

    dataset[0].grades.map((x, i) => Array.from({length: dataset[0].coef[i]}, () => average.push(x)));
    average = roundToHundredth(average.reduce((a, c) => a + c) / average.length);


    // graph
    
    dataset[0].graph1.map(x => x.score = roundToHundredth(x.score.reduce((a, c) => a + c) / x.score.length));

    const data = dataset[0].graph1;

    const width = 900;
    const height = 450;
    const margin = { top: 50, bottom: 50, left: 50, right: 50 };
    
    const graph1 = d3.select('.graph1')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("class", "svg-content")
    
    const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
    
    const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top])
    
    graph1
    .append("g")
    .attr("fill", 'royalblue')
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.score))
    .attr('title', (d) => d.score)
    .attr("class", "bar-graph1")
    .attr("height", d => y(0) - y(d.score))
    .attr("width", x.bandwidth())
    .append("title")
    .text(d => d.score)
    
    function yAxis(g) {
      g.attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("font-size", '20px')
    }
    
    function xAxis(g) {
      g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr("font-size", '20px')
    }
    
    graph1.append("g").call(xAxis);
    graph1.append("g").call(yAxis);
    graph1.node();

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
