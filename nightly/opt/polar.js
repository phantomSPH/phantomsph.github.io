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
    [new Date(2019,02,06,09,08,55),45.86,40.41],
    [new Date(2019,02,07,09,11,19),46.23,41.18],
    [new Date(2019,02,08,08,43,07),45.80,40.93],
    [new Date(2019,02,09,08,57,42),45.40,40.46],
    [new Date(2019,02,11,08,52,38),52.07,44.88],
    [new Date(2019,02,12,08,52,56),51.45,44.64],
    [new Date(2019,02,13,09,10,48),51.38,43.90],
    [new Date(2019,02,15,09,35,27),55.81,50.77],
    [new Date(2019,02,22,11,51,05),96.01,133.08],
    [new Date(2019,02,25,09,12,49),50.59,44.03],
    [new Date(2019,02,28,08,55,40),49.79,42.48],
    [new Date(2019,07,07,16,01,57),52.25,42.70],
    [new Date(2019,07,08,16,52,22),45.02,42.59],
    [new Date(2019,07,10,16,51,54),45.40,41.71],
    [new Date(2019,07,13,17,22,55),44.94,41.92],
    [new Date(2019,07,14,20,21,31),117.94,1210.77],
    [new Date(2019,07,15,19,12,36),46.27,43.10],
    [new Date(2019,07,17,03,51,44),120.37,686.68],
    [new Date(2019,07,18,08,19,17),57.91,42.73],
    [new Date(2019,07,21,17,55,12),59.13,42.86],
    [new Date(2019,07,25,08,54,26),61.88,44.48],
    [new Date(2019,07,29,09,17,16),60.06,44.46],
    [new Date(2019,07,30,09,41,33),60.06,45.74],
    [new Date(2019,07,31,09,41,15),60.35,44.69],
    [new Date(2019,08,03,08,40,25),58.34,42.68],
    [new Date(2019,08,05,09,34,51),58.11,42.94],
    [new Date(2019,08,06,09,41,02),60.99,44.90],
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
