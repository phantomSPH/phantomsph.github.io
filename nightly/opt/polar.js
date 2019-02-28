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
    [new Date(2019,01,22,14,31,13),41.21,38.96],
    [new Date(2019,01,25,09,10,45),44.15,39.04],
    [new Date(2019,01,26,06,58,46),47.10,43.80],
    [new Date(2019,01,27,09,46,37),43.35,38.09],
    [new Date(2019,02,01,09,02,52),45.73,40.65],
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
