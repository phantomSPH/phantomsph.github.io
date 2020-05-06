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
    [new Date(2020,02,25,22,04,56),28.45,28.38],
    [new Date(2020,02,26,22,08,03),28.21,28.48],
    [new Date(2020,02,27,22,26,24),28.42,28.71],
    [new Date(2020,02,31,22,17,47),28.86,28.89],
    [new Date(2020,03,01,22,11,32),28.57,29.32],
    [new Date(2020,03,02,22,12,17),28.98,29.59],
    [new Date(2020,03,06,21,53,36),30.03,29.52],
    [new Date(2020,03,07,22,09,25),30.58,29.21],
    [new Date(2020,03,08,22,25,26),32.89,34.62],
    [new Date(2020,03,09,22,03,17),31.12,30.25],
    [new Date(2020,03,16,22,09,35),30.42,30.46],
    [new Date(2020,03,18,22,09,17),29.76,30.04],
    [new Date(2020,03,20,22,11,26),38.17,32.07],
    [new Date(2020,03,23,23,58,00),37.98,36.72],
    [new Date(2020,03,24,22,16,12),38.04,38.93],
    [new Date(2020,04,01,22,21,06),36.31,36.08],
    [new Date(2020,04,04,22,44,04),30.40,30.12],
    [new Date(2020,04,05,22,16,46),30.46,30.23],
    [new Date(2020,04,06,22,19,30),29.35,29.87],
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
