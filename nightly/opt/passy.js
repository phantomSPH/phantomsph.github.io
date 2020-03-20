    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,02,02,21,32,10),32.82,32.89],
    [new Date(2020,02,03,21,30,41),36.90,36.35],
    [new Date(2020,02,05,21,32,25),37.97,38.29],
    [new Date(2020,02,06,21,28,19),37.09,37.59],
    [new Date(2020,02,07,21,30,40),39.33,38.84],
    [new Date(2020,02,12,20,58,27),28.48,29.07],
    [new Date(2020,02,17,20,58,24),28.28,28.24],
    [new Date(2020,02,18,20,58,00),28.23,28.20],
    [new Date(2020,02,20,21,49,15),28.50,29.01],
      ]);

      var options = {
       chart: {
         title: 'Benchmark timings for passy test',
         subtitle: 'Performed on monarch-login2'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('passy'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
