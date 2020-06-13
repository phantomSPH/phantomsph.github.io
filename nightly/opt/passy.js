    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,05,04,22,21,14),30.59,29.75],
    [new Date(2020,05,05,22,30,45),30.13,29.88],
    [new Date(2020,05,10,22,22,38),30.20,29.98],
    [new Date(2020,05,13,22,21,16),30.94,30.07],
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
