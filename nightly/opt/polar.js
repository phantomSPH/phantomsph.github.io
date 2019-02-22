    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2019,01,22,12,26,26),41.28,38.91],
    [new Date(2019,01,22,13,28,05),41.06,38.60],
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
