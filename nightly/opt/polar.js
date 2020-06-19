    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,05,04,22,21,14),57.63,41.61],
    [new Date(2020,05,05,22,30,45),56.57,41.76],
    [new Date(2020,05,10,22,22,38),56.81,41.48],
    [new Date(2020,05,13,22,21,16),57.42,41.33],
    [new Date(2020,05,16,22,21,08),57.21,41.14],
    [new Date(2020,05,17,22,22,05),56.85,41.39],
    [new Date(2020,05,19,19,33,49),57.07,41.64],
      ]);

      var options = {
       chart: {
         title: 'Benchmark timings for polar test',
         subtitle: 'Performed on monarch-login2'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('polar'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
