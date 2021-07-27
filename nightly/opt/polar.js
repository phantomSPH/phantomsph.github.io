    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-4');
      data.addColumn('number', 'time-ifort-4');
      data.addRows([
    [new Date(2021,06,27,05,29,16),136.54,307.45],
      ]);

      var options = {
       chart: {
         title: 'Benchmark timings for polar test',
         subtitle: 'Performed on phantom-runner-2'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('polar'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
