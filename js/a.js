function makeChart(players) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

  var insurersLabels = players.map(function(d) {
    return d.Insurer;
  });
  var anpData = players.map(function(d) {
    return +d.ANP;
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
      labels: insurersLabels,
      datasets: [
        {
          data: anpData
        }
      ]
    }
  });
}

// Request data using D3
d3
  .csv("csv/4q21long_tableL1.csv")
  .then(makeChart);