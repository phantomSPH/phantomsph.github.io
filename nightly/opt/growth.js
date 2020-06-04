    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,05,04,22,21,14),33.87,31.81],
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
