    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'time-gfortran-16');
      data.addColumn('number', 'time-msg-16');
      data.addRows([
    [new Date(2020,05,04,22,21,14),33.87,31.81],
    [new Date(2020,05,05,22,30,45),33.94,32.01],
    [new Date(2020,05,10,22,22,38),33.90,31.97],
    [new Date(2020,05,13,22,21,16),33.89,31.96],
    [new Date(2020,05,16,22,21,08),33.80,31.86],
    [new Date(2020,05,17,22,22,05),33.84,32.26],
    [new Date(2020,05,19,19,33,49),33.77,31.89],
    [new Date(2020,05,21,19,38,11),34.98,31.90],
    [new Date(2020,05,23,19,03,03),34.41,32.00],
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
