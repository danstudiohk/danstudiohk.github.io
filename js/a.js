function makeChart(dat) {

  var monthLabel = dat.map(function(d) {
    return d.month;
  });
  var companyLabel = dat.map(function(d) {
    return d.company;
  });
  var catLabel = dat.map(function(d) {
    return d.cat;
  });
  var spData = dat.map(function(d) {
    return +d.sp;
  });
  var rpData = dat.map(function(d) {
    return +d.rp;
  });


  

  var chart = new Chart('chart', {
    type: "horizontalBar",
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    },
    data: {
      labels: monthLabel,
      datasets: [
        {
          data: spData
        }
      ]
    }
  });
}


d3
.csv("https://raw.githubusercontent.com/danstudiohk/danstudiohk.github.io/main/csv/test.csv")
.then(makeChart);

