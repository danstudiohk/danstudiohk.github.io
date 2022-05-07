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


var tabulate = function (data,columns) {
  var table = d3.select('body').append('table')
  var thead = table.append('thead')
  var tbody = table.append('tbody')

  thead.append('tr')
    .selectAll('th')
      .data(columns)
      .enter()
    .append('th')
      .text(function (d) { return d })

  var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
    .append('tr')

  var cells = rows.selectAll('td')
      .data(function(row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] }
        })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}


// Request data using D3
d3
  .csv("https://raw.githubusercontent.com/danstudiohk/danstudiohk.github.io/main/csv/4q21long_tableL1.csv", function (data) {
  var columns = ["Insurer","RP","SP","ANP","MS"]
  tabulate(data,columns)
})
  
  d3
  .csv("https://raw.githubusercontent.com/danstudiohk/danstudiohk.github.io/main/csv/4q21long_tableL1.csv")
  .then(makeChart);