    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-4');
      data.addColumn('number', 'time-ifort-4');
      data.addRows([
    [new Date(2021,06,27,05,33,53),408.93,762.80],
      ]);

      var options = {
       chart: {
         title: 'Benchmark timings for tde test',
         subtitle: 'Performed on phantom-runner-4'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('tde'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
