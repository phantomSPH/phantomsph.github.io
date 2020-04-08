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
    [new Date(2020,02,18,20,58,00),33.63,28.15],
    [new Date(2020,02,25,22,04,56),33.31,28.21],
    [new Date(2020,02,26,22,08,03),33.30,28.39],
    [new Date(2020,02,27,22,26,24),33.28,28.50],
    [new Date(2020,02,31,22,17,47),33.30,28.19],
    [new Date(2020,03,01,22,11,32),33.30,28.38],
    [new Date(2020,03,02,22,12,17),33.40,28.25],
    [new Date(2020,03,06,21,53,36),33.98,31.75],
    [new Date(2020,03,07,22,09,25),34.02,32.07],
    [new Date(2020,03,08,22,25,26),33.96,31.69],
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
