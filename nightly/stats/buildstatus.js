    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Build score');
      data.addRows([
        [new Date(2017,02,02), 3],
        [new Date(2017,02,03), 3],
        [new Date(2017,02,10), 3],
        [new Date(2017,02,14), 3],
        [new Date(2017,02,15), 3],
        [new Date(2017,02,20), 3],
        [new Date(2017,02,25), 3],
        [new Date(2017,02,29), 2],
        [new Date(2017,02,30), 2],
        [new Date(2017,03,01), 3],
        [new Date(2017,03,05), 3],
        [new Date(2017,03,11), 3],
        [new Date(2017,03,13), 2],
        [new Date(2017,03,22), 3],
        [new Date(2017,03,26), 3],
        [new Date(2017,03,27), 3],
        [new Date(2017,03,29), 3],
        [new Date(2017,04,03), 0],
        [new Date(2017,04,04), 2],
        [new Date(2017,04,05), 2],
        [new Date(2017,04,06), 2],
        [new Date(2017,04,11), 2],
        [new Date(2017,04,12), 3],
        [new Date(2017,04,15), 0],
        [new Date(2017,04,16), 0],
        [new Date(2017,04,17), 1],
        [new Date(2017,04,18), 3],
        [new Date(2017,04,19), 3],
        [new Date(2017,04,20), 3],
        [new Date(2017,04,22), 3],
        [new Date(2017,04,23), 3],
        [new Date(2017,04,25), 3],
        [new Date(2017,04,26), 1],
        [new Date(2017,04,27), 3],
        [new Date(2017,04,31), 3],
        [new Date(2017,05,01), 3],
        [new Date(2017,05,02), 1],
        [new Date(2017,05,03), 0],
        [new Date(2017,05,05), 0],
        [new Date(2017,05,06), 0],
        [new Date(2017,05,07), 0],
        [new Date(2017,05,08), 1],
        [new Date(2017,05,09), 3],
        [new Date(2017,05,10), 0],
        [new Date(2017,05,12), 3],
        [new Date(2017,05,13), 3],
        [new Date(2017,05,14), 3],
        [new Date(2017,05,15), 3],
        [new Date(2017,05,16), 3],
        [new Date(2017,05,17), 3],
        [new Date(2017,05,19), 3],
        [new Date(2017,05,20), 3],
        [new Date(2017,05,24), 2],
        [new Date(2017,05,26), 3],
        [new Date(2017,05,27), 3],
        [new Date(2017,05,28), 3],
        [new Date(2017,06,05), 3],
        [new Date(2017,06,06), 2],
        [new Date(2017,06,11), 2],
        [new Date(2017,06,22), 2],
        [new Date(2017,06,25), 3],
        [new Date(2017,06,27), 3],
        [new Date(2017,07,03), 1],
        [new Date(2017,07,04), 1],
        [new Date(2017,07,05), 1],
        [new Date(2017,07,07), 3],
        [new Date(2017,07,12), 3],
        [new Date(2017,07,16), 1],
        [new Date(2017,07,22), 3],
        [new Date(2017,07,26), 0],
        [new Date(2017,07,28), 0],
        [new Date(2017,07,29), 3],
        [new Date(2017,07,30), 3],
        [new Date(2017,08,02), 0],
        [new Date(2017,08,04), 3],
        [new Date(2017,08,06), 2],
        [new Date(2017,08,09), 3],
        [new Date(2017,08,16), 3],
        [new Date(2017,08,23), 3],
        [new Date(2017,08,25), 3],
        [new Date(2017,08,26), 3],
        [new Date(2017,08,28), 3],
        [new Date(2017,08,29), 3],
        [new Date(2017,09,07), 3],
        [new Date(2017,09,09), 3],
        [new Date(2017,09,12), 3],
        [new Date(2017,09,13), 3],
        [new Date(2017,09,14), 3],
        [new Date(2017,09,16), 3],
        [new Date(2017,09,17), 3],
        [new Date(2017,09,19), 3],
        [new Date(2017,09,23), 3],
        [new Date(2017,09,24), 2],
        [new Date(2017,10,08), 0],
        [new Date(2017,10,09), 2],
        [new Date(2017,10,10), 3],
        [new Date(2017,10,14), 3],
        [new Date(2017,10,15), 3],
        [new Date(2017,10,16), 3],
        [new Date(2017,10,17), 3],
        [new Date(2017,10,18), 1],
        [new Date(2017,10,20), 1],
        [new Date(2017,10,21), 1],
        [new Date(2017,10,22), 3],
        [new Date(2017,10,23), 1],
        [new Date(2017,10,24), 3],
        [new Date(2017,10,25), 3],
        [new Date(2017,10,28), 3],
        [new Date(2017,10,29), 3],
        [new Date(2017,10,30), 3],
        [new Date(2017,11,02), 2],
        [new Date(2017,11,04), 0],
        [new Date(2017,11,05), 3],
        [new Date(2017,11,06), 3],
        [new Date(2017,11,07), 2],
        [new Date(2017,11,12), 2],
        [new Date(2017,11,15), 2],
        [new Date(2017,11,16), 2],
        [new Date(2017,11,19), 2],
        [new Date(2018,00,11), 2],
        [new Date(2018,00,12), 2],
        [new Date(2018,00,13), 3],
        [new Date(2018,00,17), 3],
        [new Date(2018,00,18), 3],
        [new Date(2018,00,19), 3],
        [new Date(2018,00,20), 3],
        [new Date(2018,00,22), 2],
        [new Date(2018,00,23), 3],
        [new Date(2018,00,25), 3],
        [new Date(2018,00,29), 3],
        [new Date(2018,00,31), 3],
        [new Date(2018,01,01), 2],
        [new Date(2018,01,02), 3],
        [new Date(2018,01,03), 3],
        [new Date(2018,01,05), 3],
        [new Date(2018,01,09), 3],
        [new Date(2018,01,16), 2],
        [new Date(2018,01,17), 3],
        [new Date(2018,01,19), 0],
        [new Date(2018,01,20), 2],
        [new Date(2018,01,21), 2],
        [new Date(2018,01,22), 2],
        [new Date(2018,01,27), 2],
        [new Date(2018,01,28), 1],
        [new Date(2018,02,02), 0],
        [new Date(2018,02,03), 0],
        [new Date(2018,02,05), 0],
        [new Date(2018,02,06), 0],
        [new Date(2018,02,07), 3],
        [new Date(2018,02,08), 3],
        [new Date(2018,02,09), 3],
        [new Date(2018,02,10), 0],
        [new Date(2018,02,12), 3],
        [new Date(2018,02,14), 3],
        [new Date(2018,02,15), 3],
        [new Date(2018,02,17), 2],
        [new Date(2018,02,19), 3],
        [new Date(2018,02,20), 1],
        [new Date(2018,02,21), 3],
        [new Date(2018,02,22), 0],
        [new Date(2018,02,23), 0],
        [new Date(2018,02,24), 0],
        [new Date(2018,02,26), 1],
        [new Date(2018,02,27), 2],
        [new Date(2018,02,28), 0],
        [new Date(2018,02,29), 3],
        [new Date(2018,02,30), 2],
        [new Date(2018,02,31), 2],
        [new Date(2018,03,02), 2],
        [new Date(2018,03,03), 2],
        [new Date(2018,03,04), 2],
        [new Date(2018,03,05), 2],
        [new Date(2018,03,06), 1],
        [new Date(2018,03,09), 3],
        [new Date(2018,03,11), 3],
        [new Date(2018,03,13), 2],
        [new Date(2018,03,18), 3],
        [new Date(2018,03,21), 3],
        [new Date(2018,03,27), 3],
        [new Date(2018,03,28), 1],
        [new Date(2018,04,02), 1],
        [new Date(2018,04,03), 1],
        [new Date(2018,04,05), 1],
        [new Date(2018,04,07), 3],
        [new Date(2018,04,09), 3],
        [new Date(2018,04,28), 3],
        [new Date(2018,04,29), 3],
        [new Date(2018,04,30), 3],
        [new Date(2018,05,05), 3],
        [new Date(2018,05,13), 3],
        [new Date(2018,05,14), 3],
        [new Date(2018,05,20), 3],
        [new Date(2018,05,21), 1],
        [new Date(2018,06,11), 3],
        [new Date(2018,06,12), 3],
        [new Date(2018,06,13), 3],
        [new Date(2018,06,16), 3],
        [new Date(2018,06,18), 3],
        [new Date(2018,06,19), 2],
        [new Date(2018,06,20), 2],
        [new Date(2018,06,23), 0],
        [new Date(2018,06,28), 3],
        [new Date(2018,07,04), 3],
        [new Date(2018,07,07), 3],
        [new Date(2018,07,08), 3],
        [new Date(2018,07,09), 3],
        [new Date(2018,07,11), 3],
        [new Date(2018,07,18), 1],
        [new Date(2018,07,21), 3],
        [new Date(2018,07,24), 3],
        [new Date(2018,07,25), 3],
        [new Date(2018,07,28), 1],
        [new Date(2018,08,14), 3],
        [new Date(2018,08,19), 3],
        [new Date(2018,09,18), 1],
        [new Date(2018,09,19), 3],
        [new Date(2018,09,20), 3],
        [new Date(2018,09,22), 3],
        [new Date(2018,09,26), 2],
        [new Date(2018,09,29), 3],
        [new Date(2018,10,06), 3],
        [new Date(2018,10,09), 3],
        [new Date(2018,10,10), 3],
        [new Date(2018,10,15), 3],
        [new Date(2018,10,16), 3],
        [new Date(2018,10,19), 2],
        [new Date(2018,10,20), 2],
        [new Date(2018,10,21), 2],
        [new Date(2018,10,22), 2],
        [new Date(2018,10,29), 2],
        [new Date(2018,11,01), 2],
        [new Date(2018,11,04), 2],
        [new Date(2018,11,17), 2],
        [new Date(2018,11,18), 2],
        [new Date(2018,11,19), 2],
        [new Date(2019,00,16), 2],
        [new Date(2019,00,21), 2],
        [new Date(2019,01,07), 2],
        [new Date(2019,01,09), 2],
        [new Date(2019,01,11), 2],
        [new Date(2019,01,12), 2],
        [new Date(2019,01,13), 2],
        [new Date(2019,01,14), 2],
        [new Date(2019,01,16), 3],
        [new Date(2019,01,18), 3],
        [new Date(2019,01,20), 3],
        [new Date(2019,01,21), 3],
        [new Date(2019,01,25), 3],
        [new Date(2019,01,27), 3],
        [new Date(2019,02,01), 3],
        [new Date(2019,02,06), 3],
        [new Date(2019,02,07), 2],
        [new Date(2019,02,08), 3],
        [new Date(2019,02,09), 3],
        [new Date(2019,02,11), 3],
        [new Date(2019,02,12), 3],
        [new Date(2019,02,13), 3],
        [new Date(2019,02,15), 3],
        [new Date(2019,02,22), 3],
        [new Date(2019,02,25), 3],
        [new Date(2019,02,28), 3],
        [new Date(2019,04,30), 0],
        [new Date(2019,05,06), 0],
        [new Date(2019,05,18), 0],
        [new Date(2019,05,20), 0],
        [new Date(2019,05,22), 0],
        [new Date(2019,05,25), 0],
        [new Date(2019,05,27), 0],
        [new Date(2019,07,08), 3],
        [new Date(2019,07,10), 3],
        [new Date(2019,07,13), 2],
        [new Date(2019,07,14), 3],
        [new Date(2019,07,15), 3],
        [new Date(2019,07,20), 3],
        [new Date(2019,07,25), 0],
        [new Date(2019,07,29), 2],
        [new Date(2019,07,30), 3],
        [new Date(2019,07,31), 3],
        [new Date(2019,08,03), 3],
        [new Date(2019,08,05), 3],
        [new Date(2019,08,06), 3],
        [new Date(2019,08,14), 3],
        [new Date(2019,09,16), 3],
        [new Date(2019,10,13), 3],
        [new Date(2019,10,19), 3],
        [new Date(2019,11,10), 3],
        [new Date(2019,11,12), 1],
        [new Date(2019,11,13), 3],
        [new Date(2019,11,14), 3],
        [new Date(2019,11,16), 3],
      ]);

      var options = {
       chart: {
         title: 'Nightly build status',
         subtitle: '0=buildtestfail, 1=buildfail 2=testfail 3=ok'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('build_status'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }