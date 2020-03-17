    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,02,02,21,32,10),33.92,28.37],
    [new Date(2020,02,03,21,30,41),34.08,28.48],
    [new Date(2020,02,05,21,32,25),34.12,28.62],
    [new Date(2020,02,06,21,28,19),33.88,28.51],
    [new Date(2020,02,07,21,30,40),33.99,28.43],
    [new Date(2020,02,12,20,58,27),33.67,28.19],
    [new Date(2020,02,17,20,58,24),33.58,28.25],
      ]);

      var options = {
       chart: {
         title: 'Benchmark timings for growth test',
         subtitle: 'Performed on monarch-login2'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('growth'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
