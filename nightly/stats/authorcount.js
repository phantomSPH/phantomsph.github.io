    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Number of authors');
      data.addRows([
        [new Date(2017,01,14), 1],
        [new Date(2017,01,14), 2],
        [new Date(2017,01,16), 2],
        [new Date(2017,01,16), 3],
        [new Date(2017,01,20), 3],
        [new Date(2017,01,21), 4],
        [new Date(2017,01,23), 4],
        [new Date(2017,01,24), 5],
        [new Date(2017,02,01), 4],
        [new Date(2017,02,01), 5],
        [new Date(2017,02,02), 5],
        [new Date(2017,02,09), 6],
        [new Date(2017,02,13), 7],
        [new Date(2017,02,14), 7],
        [new Date(2017,02,18), 7],
        [new Date(2017,02,24), 5],
        [new Date(2017,02,24), 7],
        [new Date(2017,02,25), 7],
        [new Date(2017,02,27), 7],
        [new Date(2017,02,28), 7],
        [new Date(2017,02,29), 7],
        [new Date(2017,02,31), 7],
        [new Date(2017,02,31), 8],
        [new Date(2017,03,01), 7],
        [new Date(2017,03,02), 8],
        [new Date(2017,03,04), 7],
        [new Date(2017,03,05), 7],
        [new Date(2017,03,06), 8],
        [new Date(2017,03,10), 7],
        [new Date(2017,03,11), 8],
        [new Date(2017,03,12), 7],
        [new Date(2017,03,12), 8],
        [new Date(2017,03,13), 7],
        [new Date(2017,03,19), 8],
        [new Date(2017,03,20), 8],
        [new Date(2017,03,21), 7],
        [new Date(2017,03,22), 7],
        [new Date(2017,03,25), 7],
        [new Date(2017,03,25), 8],
        [new Date(2017,03,26), 7],
        [new Date(2017,03,26), 8],
        [new Date(2017,03,27), 8],
        [new Date(2017,03,28), 8],
        [new Date(2017,03,29), 8],
        [new Date(2017,04,01), 9],
        [new Date(2017,04,02), 10],
        [new Date(2017,04,02), 9],
        [new Date(2017,04,03), 10],
        [new Date(2017,04,04), 10],
        [new Date(2017,04,04), 11],
        [new Date(2017,04,05), 10],
        [new Date(2017,04,05), 11],
        [new Date(2017,04,07), 11],
        [new Date(2017,04,08), 11],
        [new Date(2017,04,09), 11],
        [new Date(2017,04,10), 11],
        [new Date(2017,04,11), 11],
        [new Date(2017,04,12), 11],
        [new Date(2017,04,14), 11],
        [new Date(2017,04,15), 11],
        [new Date(2017,04,16), 11],
        [new Date(2017,04,16), 12],
        [new Date(2017,04,17), 11],
        [new Date(2017,04,18), 11],
        [new Date(2017,04,19), 11],
        [new Date(2017,04,19), 13],
        [new Date(2017,04,20), 11],
        [new Date(2017,04,20), 13],
        [new Date(2017,04,21), 11],
        [new Date(2017,04,22), 13],
        [new Date(2017,04,23), 11],
        [new Date(2017,04,23), 13],
        [new Date(2017,04,24), 11],
        [new Date(2017,04,25), 11],
        [new Date(2017,04,26), 11],
        [new Date(2017,04,26), 12],
        [new Date(2017,04,27), 12],
        [new Date(2017,04,28), 12],
        [new Date(2017,04,29), 12],
        [new Date(2017,04,30), 12],
        [new Date(2017,04,31), 12],
        [new Date(2017,05,01), 13],
        [new Date(2017,05,02), 12],
        [new Date(2017,05,02), 13],
        [new Date(2017,05,03), 13],
        [new Date(2017,05,05), 13],
        [new Date(2017,05,07), 13],
        [new Date(2017,05,07), 14],
        [new Date(2017,05,08), 14],
        [new Date(2017,05,09), 13],
        [new Date(2017,05,09), 14],
        [new Date(2017,05,10), 14],
        [new Date(2017,05,11), 14],
        [new Date(2017,05,12), 14],
        [new Date(2017,05,13), 14],
        [new Date(2017,05,14), 14],
        [new Date(2017,05,15), 14],
        [new Date(2017,05,15), 15],
        [new Date(2017,05,16), 14],
        [new Date(2017,05,16), 15],
        [new Date(2017,05,17), 15],
        [new Date(2017,05,19), 15],
        [new Date(2017,05,23), 15],
        [new Date(2017,05,24), 15],
        [new Date(2017,05,25), 15],
        [new Date(2017,05,26), 15],
        [new Date(2017,05,27), 15],
        [new Date(2017,05,28), 15],
        [new Date(2017,05,29), 15],
        [new Date(2017,05,30), 15],
        [new Date(2017,06,01), 15],
        [new Date(2017,06,02), 15],
        [new Date(2017,06,03), 15],
        [new Date(2017,06,04), 15],
        [new Date(2017,06,05), 15],
        [new Date(2017,06,10), 15],
        [new Date(2017,06,11), 15],
        [new Date(2017,06,17), 15],
        [new Date(2017,06,21), 15],
        [new Date(2017,06,22), 15],
        [new Date(2017,06,24), 15],
        [new Date(2017,06,26), 15],
        [new Date(2017,06,27), 15],
        [new Date(2017,06,28), 15],
        [new Date(2017,07,02), 15],
        [new Date(2017,07,03), 15],
        [new Date(2017,07,04), 15],
        [new Date(2017,07,05), 15],
        [new Date(2017,07,07), 15],
        [new Date(2017,07,08), 15],
        [new Date(2017,07,09), 15],
        [new Date(2017,07,10), 15],
        [new Date(2017,07,11), 15],
        [new Date(2017,07,11), 16],
        [new Date(2017,07,12), 15],
        [new Date(2017,07,14), 16],
        [new Date(2017,07,16), 16],
        [new Date(2017,07,18), 15],
        [new Date(2017,07,20), 16],
        [new Date(2017,07,22), 16],
        [new Date(2017,07,25), 15],
        [new Date(2017,07,25), 16],
        [new Date(2017,07,26), 16],
        [new Date(2017,07,28), 16],
        [new Date(2017,07,29), 16],
        [new Date(2017,08,01), 16],
        [new Date(2017,08,02), 16],
        [new Date(2017,08,05), 16],
        [new Date(2017,08,08), 16],
        [new Date(2017,08,09), 16],
        [new Date(2017,08,15), 16],
        [new Date(2017,08,16), 16],
        [new Date(2017,08,22), 17],
        [new Date(2017,08,22), 18],
        [new Date(2017,08,25), 18],
        [new Date(2017,08,27), 18],
        [new Date(2017,08,28), 19],
        [new Date(2017,08,29), 19],
        [new Date(2017,09,05), 20],
        [new Date(2017,09,06), 20],
        [new Date(2017,09,07), 20],
        [new Date(2017,09,09), 20],
        [new Date(2017,09,11), 20],
        [new Date(2017,09,12), 20],
        [new Date(2017,09,13), 20],
        [new Date(2017,09,14), 20],
        [new Date(2017,09,16), 21],
        [new Date(2017,09,17), 21],
        [new Date(2017,09,17), 22],
        [new Date(2017,09,18), 20],
        [new Date(2017,09,18), 21],
        [new Date(2017,09,18), 22],
        [new Date(2017,09,19), 22],
        [new Date(2017,09,21), 18],
        [new Date(2017,09,21), 22],
        [new Date(2017,09,23), 22],
        [new Date(2017,09,24), 22],
        [new Date(2017,09,25), 22],
        [new Date(2017,09,27), 27],
        [new Date(2017,09,30), 22],
        [new Date(2017,09,30), 23],
        [new Date(2017,09,31), 23],
        [new Date(2017,10,01), 23],
        [new Date(2017,10,02), 23],
        [new Date(2017,10,03), 23],
        [new Date(2017,10,07), 24],
        [new Date(2017,10,08), 24],
        [new Date(2017,10,09), 24],
        [new Date(2017,10,10), 24],
        [new Date(2017,10,13), 24],
        [new Date(2017,10,14), 24],
        [new Date(2017,10,15), 24],
        [new Date(2017,10,16), 24],
        [new Date(2017,10,16), 25],
        [new Date(2017,10,17), 24],
        [new Date(2017,10,17), 25],
        [new Date(2017,10,18), 25],
        [new Date(2017,10,19), 25],
        [new Date(2017,10,20), 25],
        [new Date(2017,10,21), 25],
        [new Date(2017,10,22), 25],
        [new Date(2017,10,23), 25],
        [new Date(2017,10,24), 25],
        [new Date(2017,10,25), 25],
        [new Date(2017,10,27), 25],
        [new Date(2017,10,28), 25],
        [new Date(2017,10,29), 25],
        [new Date(2017,10,30), 25],
        [new Date(2017,11,01), 25],
        [new Date(2017,11,01), 26],
        [new Date(2017,11,02), 25],
        [new Date(2017,11,03), 26],
        [new Date(2017,11,04), 26],
        [new Date(2017,11,05), 26],
        [new Date(2017,11,06), 26],
        [new Date(2017,11,07), 27],
        [new Date(2017,11,11), 27],
        [new Date(2017,11,13), 27],
        [new Date(2017,11,14), 27],
        [new Date(2017,11,15), 27],
        [new Date(2017,11,16), 27],
        [new Date(2017,11,18), 27],
        [new Date(2017,11,19), 27],
        [new Date(2018,00,04), 27],
        [new Date(2018,00,05), 27],
        [new Date(2018,00,10), 27],
        [new Date(2018,00,11), 27],
        [new Date(2018,00,12), 27],
        [new Date(2018,00,13), 27],
        [new Date(2018,00,14), 27],
        [new Date(2018,00,15), 26],
        [new Date(2018,00,15), 27],
        [new Date(2018,00,16), 26],
        [new Date(2018,00,17), 26],
        [new Date(2018,00,18), 26],
        [new Date(2018,00,19), 26],
        [new Date(2018,00,20), 26],
        [new Date(2018,00,22), 27],
        [new Date(2018,00,23), 27],
        [new Date(2018,00,24), 27],
        [new Date(2018,00,25), 27],
        [new Date(2018,00,26), 27],
        [new Date(2018,00,27), 27],
        [new Date(2018,00,29), 27],
        [new Date(2018,00,30), 27],
        [new Date(2018,00,31), 27],
        [new Date(2018,01,01), 27],
        [new Date(2018,01,02), 27],
        [new Date(2018,01,03), 27],
        [new Date(2018,01,05), 27],
        [new Date(2018,01,06), 27],
        [new Date(2018,01,07), 27],
        [new Date(2018,01,08), 27],
        [new Date(2018,01,09), 27],
        [new Date(2018,01,10), 27],
        [new Date(2018,01,12), 27],
        [new Date(2018,01,13), 27],
        [new Date(2018,01,14), 27],
        [new Date(2018,01,15), 27],
        [new Date(2018,01,16), 27],
        [new Date(2018,01,17), 27],
        [new Date(2018,01,19), 27],
        [new Date(2018,01,20), 27],
        [new Date(2018,01,21), 28],
        [new Date(2018,01,22), 29],
        [new Date(2018,01,23), 30],
        [new Date(2018,01,24), 30],
        [new Date(2018,01,26), 30],
        [new Date(2018,01,27), 30],
        [new Date(2018,01,28), 31],
        [new Date(2018,02,01), 31],
        [new Date(2018,02,02), 31],
        [new Date(2018,02,03), 28],
        [new Date(2018,02,05), 28],
        [new Date(2018,02,06), 28],
        [new Date(2018,02,07), 28],
        [new Date(2018,02,08), 28],
        [new Date(2018,02,09), 28],
        [new Date(2018,02,10), 28],
        [new Date(2018,02,12), 28],
        [new Date(2018,02,13), 28],
        [new Date(2018,02,14), 28],
        [new Date(2018,02,15), 28],
        [new Date(2018,02,16), 28],
        [new Date(2018,02,17), 28],
        [new Date(2018,02,19), 28],
        [new Date(2018,02,20), 28],
        [new Date(2018,02,21), 29],
        [new Date(2018,02,22), 29],
        [new Date(2018,02,23), 29],
        [new Date(2018,02,24), 30],
        [new Date(2018,02,26), 30],
        [new Date(2018,02,27), 30],
        [new Date(2018,02,28), 30],
        [new Date(2018,02,29), 31],
        [new Date(2018,02,30), 31],
        [new Date(2018,02,31), 31],
        [new Date(2018,03,02), 31],
        [new Date(2018,03,03), 31],
        [new Date(2018,03,04), 31],
        [new Date(2018,03,05), 31],
        [new Date(2018,03,06), 31],
        [new Date(2018,03,07), 31],
        [new Date(2018,03,09), 31],
        [new Date(2018,03,10), 31],
        [new Date(2018,03,11), 31],
        [new Date(2018,03,12), 31],
        [new Date(2018,03,13), 31],
        [new Date(2018,03,14), 31],
        [new Date(2018,03,16), 31],
        [new Date(2018,03,17), 31],
        [new Date(2018,03,18), 31],
        [new Date(2018,03,19), 31],
        [new Date(2018,03,20), 31],
        [new Date(2018,03,21), 31],
        [new Date(2018,03,23), 31],
        [new Date(2018,03,24), 31],
        [new Date(2018,03,25), 31],
        [new Date(2018,03,26), 31],
        [new Date(2018,03,27), 31],
        [new Date(2018,03,28), 31],
        [new Date(2018,03,30), 31],
        [new Date(2018,04,01), 31],
        [new Date(2018,04,02), 31],
        [new Date(2018,04,03), 32],
        [new Date(2018,04,04), 32],
        [new Date(2018,04,05), 32],
        [new Date(2018,04,07), 32],
        [new Date(2018,04,08), 32],
        [new Date(2018,04,09), 32],
        [new Date(2018,04,10), 32],
        [new Date(2018,04,11), 32],
        [new Date(2018,04,12), 32],
        [new Date(2018,04,14), 32],
        [new Date(2018,04,15), 32],
        [new Date(2018,04,16), 32],
        [new Date(2018,04,17), 32],
        [new Date(2018,04,18), 32],
        [new Date(2018,04,19), 32],
        [new Date(2018,04,21), 32],
        [new Date(2018,04,22), 32],
        [new Date(2018,04,23), 32],
        [new Date(2018,04,24), 32],
        [new Date(2018,04,25), 32],
        [new Date(2018,04,26), 32],
        [new Date(2018,04,28), 32],
        [new Date(2018,04,29), 32],
        [new Date(2018,04,30), 32],
        [new Date(2018,04,31), 32],
        [new Date(2018,05,01), 32],
        [new Date(2018,05,05), 32],
        [new Date(2018,05,06), 32],
        [new Date(2018,05,07), 32],
        [new Date(2018,05,08), 32],
        [new Date(2018,05,09), 32],
        [new Date(2018,05,11), 32],
        [new Date(2018,05,12), 32],
        [new Date(2018,05,13), 32],
        [new Date(2018,05,14), 31],
        [new Date(2018,05,15), 31],
        [new Date(2018,05,16), 31],
        [new Date(2018,05,18), 31],
        [new Date(2018,05,19), 31],
        [new Date(2018,05,20), 31],
        [new Date(2018,05,21), 33],
        [new Date(2018,05,22), 33],
        [new Date(2018,05,23), 34],
        [new Date(2018,05,25), 34],
        [new Date(2018,05,26), 34],
        [new Date(2018,05,27), 34],
        [new Date(2018,05,28), 34],
        [new Date(2018,05,29), 34],
        [new Date(2018,05,30), 34],
        [new Date(2018,06,02), 34],
        [new Date(2018,06,03), 34],
        [new Date(2018,06,04), 34],
        [new Date(2018,06,05), 34],
        [new Date(2018,06,06), 34],
        [new Date(2018,06,07), 34],
        [new Date(2018,06,09), 34],
        [new Date(2018,06,10), 34],
        [new Date(2018,06,11), 34],
        [new Date(2018,06,12), 34],
        [new Date(2018,06,13), 34],
        [new Date(2018,06,14), 35],
        [new Date(2018,06,16), 35],
        [new Date(2018,06,17), 35],
        [new Date(2018,06,18), 35],
        [new Date(2018,06,19), 35],
        [new Date(2018,06,20), 35],
        [new Date(2018,06,23), 35],
        [new Date(2018,06,24), 35],
        [new Date(2018,06,25), 35],
        [new Date(2018,06,28), 35],
        [new Date(2018,06,30), 35],
        [new Date(2018,07,04), 35],
        [new Date(2018,07,06), 35],
        [new Date(2018,07,07), 35],
        [new Date(2018,07,08), 35],
        [new Date(2018,07,09), 35],
        [new Date(2018,07,10), 35],
        [new Date(2018,07,11), 35],
        [new Date(2018,07,13), 35],
        [new Date(2018,07,14), 35],
        [new Date(2018,07,18), 35],
        [new Date(2018,07,20), 35],
        [new Date(2018,07,21), 35],
        [new Date(2018,07,22), 35],
        [new Date(2018,07,23), 35],
        [new Date(2018,07,24), 35],
        [new Date(2018,07,25), 35],
        [new Date(2018,07,27), 35],
        [new Date(2018,07,28), 35],
        [new Date(2018,07,29), 35],
        [new Date(2018,07,31), 35],
        [new Date(2018,08,01), 35],
        [new Date(2018,08,11), 35],
        [new Date(2018,08,12), 35],
        [new Date(2018,08,13), 35],
        [new Date(2018,08,14), 35],
        [new Date(2018,08,15), 35],
        [new Date(2018,08,17), 35],
        [new Date(2018,08,18), 35],
        [new Date(2018,08,19), 35],
        [new Date(2018,08,20), 35],
        [new Date(2018,08,21), 35],
        [new Date(2018,08,22), 35],
        [new Date(2018,08,24), 35],
        [new Date(2018,08,25), 35],
        [new Date(2018,09,03), 36],
        [new Date(2018,09,04), 36],
        [new Date(2018,09,05), 36],
        [new Date(2018,09,06), 36],
        [new Date(2018,09,08), 36],
        [new Date(2018,09,08), 36],
        [new Date(2018,09,09), 37],
        [new Date(2018,09,10), 37],
        [new Date(2018,09,11), 37],
        [new Date(2018,09,12), 37],
        [new Date(2018,09,13), 37],
        [new Date(2018,09,15), 37],
        [new Date(2018,09,16), 37],
        [new Date(2018,09,17), 37],
        [new Date(2018,09,18), 37],
        [new Date(2018,09,19), 37],
        [new Date(2018,09,20), 37],
        [new Date(2018,09,22), 37],
        [new Date(2018,09,23), 37],
        [new Date(2018,09,24), 37],
        [new Date(2018,09,25), 37],
        [new Date(2018,09,26), 37],
        [new Date(2018,09,27), 37],
        [new Date(2018,09,29), 37],
        [new Date(2018,09,30), 37],
        [new Date(2018,09,31), 37],
        [new Date(2018,10,01), 37],
        [new Date(2018,10,02), 37],
        [new Date(2018,10,03), 37],
        [new Date(2018,10,05), 37],
        [new Date(2018,10,06), 37],
        [new Date(2018,10,07), 37],
        [new Date(2018,10,08), 37],
        [new Date(2018,10,09), 37],
        [new Date(2018,10,10), 37],
        [new Date(2018,10,12), 37],
        [new Date(2018,10,13), 37],
        [new Date(2018,10,14), 37],
        [new Date(2018,10,15), 38],
        [new Date(2018,10,16), 38],
        [new Date(2018,10,17), 38],
        [new Date(2018,10,19), 38],
        [new Date(2018,10,20), 38],
        [new Date(2018,10,21), 38],
        [new Date(2018,10,22), 38],
        [new Date(2018,10,23), 38],
        [new Date(2018,10,24), 38],
        [new Date(2018,10,26), 38],
        [new Date(2018,10,27), 38],
        [new Date(2018,10,28), 38],
        [new Date(2018,10,29), 38],
        [new Date(2018,10,30), 38],
        [new Date(2018,11,01), 38],
        [new Date(2018,11,03), 38],
        [new Date(2018,11,04), 38],
        [new Date(2018,11,05), 38],
        [new Date(2018,11,06), 38],
        [new Date(2018,11,07), 38],
        [new Date(2018,11,08), 38],
        [new Date(2018,11,10), 38],
        [new Date(2018,11,11), 38],
        [new Date(2018,11,12), 38],
        [new Date(2018,11,13), 38],
        [new Date(2018,11,14), 38],
        [new Date(2018,11,15), 38],
        [new Date(2018,11,17), 38],
        [new Date(2018,11,18), 38],
        [new Date(2018,11,19), 38],
        [new Date(2018,11,20), 38],
        [new Date(2018,11,21), 38],
        [new Date(2018,11,22), 38],
        [new Date(2018,11,24), 38],
        [new Date(2018,11,25), 38],
        [new Date(2018,11,26), 38],
        [new Date(2018,11,27), 38],
        [new Date(2018,11,28), 38],
        [new Date(2018,11,29), 38],
        [new Date(2018,11,31), 38],
        [new Date(2019,00,01), 38],
        [new Date(2019,00,02), 38],
        [new Date(2019,00,03), 38],
        [new Date(2019,00,04), 38],
        [new Date(2019,00,05), 38],
        [new Date(2019,00,07), 38],
        [new Date(2019,00,08), 38],
        [new Date(2019,00,09), 38],
        [new Date(2019,00,10), 38],
        [new Date(2019,00,11), 38],
        [new Date(2019,00,12), 38],
        [new Date(2019,00,14), 38],
        [new Date(2019,00,15), 38],
        [new Date(2019,00,16), 38],
        [new Date(2019,00,17), 38],
        [new Date(2019,00,18), 38],
        [new Date(2019,00,19), 38],
        [new Date(2019,00,21), 38],
        [new Date(2019,00,22), 38],
        [new Date(2019,00,23), 38],
        [new Date(2019,00,24), 38],
        [new Date(2019,00,25), 38],
        [new Date(2019,00,26), 38],
        [new Date(2019,00,28), 38],
        [new Date(2019,00,29), 38],
        [new Date(2019,00,30), 38],
        [new Date(2019,00,31), 38],
        [new Date(2019,01,01), 38],
        [new Date(2019,01,02), 38],
        [new Date(2019,01,04), 38],
        [new Date(2019,01,05), 38],
        [new Date(2019,01,06), 38],
        [new Date(2019,01,07), 38],
        [new Date(2019,01,08), 38],
        [new Date(2019,01,09), 38],
        [new Date(2019,01,11), 38],
        [new Date(2019,01,12), 38],
        [new Date(2019,01,13), 38],
        [new Date(2019,01,14), 38],
        [new Date(2019,01,15), 38],
        [new Date(2019,01,16), 38],
        [new Date(2019,01,18), 38],
        [new Date(2019,01,19), 38],
        [new Date(2019,01,20), 38],
        [new Date(2019,01,21), 38],
        [new Date(2019,01,22), 38],
        [new Date(2019,01,23), 38],
        [new Date(2019,01,25), 38],
        [new Date(2019,01,26), 38],
        [new Date(2019,01,27), 38],
        [new Date(2019,01,28), 38],
        [new Date(2019,02,01), 38],
        [new Date(2019,02,02), 38],
        [new Date(2019,02,04), 38],
        [new Date(2019,02,05), 38],
        [new Date(2019,02,06), 38],
        [new Date(2019,02,07), 38],
        [new Date(2019,02,08), 38],
        [new Date(2019,02,09), 38],
        [new Date(2019,02,11), 38],
        [new Date(2019,02,12), 38],
        [new Date(2019,02,13), 38],
        [new Date(2019,02,14), 38],
        [new Date(2019,02,15), 38],
        [new Date(2019,02,16), 38],
        [new Date(2019,02,18), 38],
        [new Date(2019,02,19), 38],
        [new Date(2019,02,20), 38],
        [new Date(2019,02,21), 38],
        [new Date(2019,02,22), 38],
        [new Date(2019,02,23), 38],
        [new Date(2019,02,25), 38],
        [new Date(2019,02,26), 38],
        [new Date(2019,02,27), 38],
        [new Date(2019,02,28), 38],
        [new Date(2019,02,29), 38],
        [new Date(2019,02,30), 38],
        [new Date(2019,03,01), 38],
        [new Date(2019,03,05), 38],
        [new Date(2019,03,06), 38],
        [new Date(2019,03,08), 38],
        [new Date(2019,03,09), 38],
        [new Date(2019,03,10), 38],
        [new Date(2019,03,11), 38],
        [new Date(2019,03,12), 38],
        [new Date(2019,03,13), 38],
        [new Date(2019,03,15), 38],
        [new Date(2019,03,16), 38],
        [new Date(2019,03,17), 38],
        [new Date(2019,03,22), 38],
        [new Date(2019,03,23), 38],
        [new Date(2019,03,24), 38],
        [new Date(2019,03,25), 38],
        [new Date(2019,03,26), 38],
        [new Date(2019,03,27), 38],
        [new Date(2019,03,29), 38],
        [new Date(2019,03,30), 38],
        [new Date(2019,04,01), 38],
        [new Date(2019,04,02), 38],
        [new Date(2019,04,03), 38],
        [new Date(2019,04,07), 38],
        [new Date(2019,04,08), 38],
        [new Date(2019,04,09), 38],
        [new Date(2019,04,10), 38],
        [new Date(2019,04,11), 38],
        [new Date(2019,04,15), 38],
        [new Date(2019,04,16), 38],
        [new Date(2019,04,17), 38],
        [new Date(2019,04,18), 38],
        [new Date(2019,04,20), 38],
        [new Date(2019,04,21), 38],
        [new Date(2019,04,27), 38],
        [new Date(2019,04,31), 38],
        [new Date(2019,05,01), 38],
        [new Date(2019,05,03), 38],
        [new Date(2019,05,04), 38],
        [new Date(2019,05,05), 38],
        [new Date(2019,05,08), 38],
        [new Date(2019,05,10), 38],
        [new Date(2019,05,11), 38],
        [new Date(2019,05,12), 38],
        [new Date(2019,05,13), 38],
        [new Date(2019,05,14), 38],
        [new Date(2019,05,15), 38],
        [new Date(2019,05,17), 38],
        [new Date(2019,05,21), 38],
        [new Date(2019,05,26), 38],
        [new Date(2019,06,08), 38],
        [new Date(2019,06,13), 38],
        [new Date(2019,06,15), 38],
        [new Date(2019,06,16), 38],
        [new Date(2019,06,17), 38],
        [new Date(2019,06,18), 38],
        [new Date(2019,06,19), 38],
        [new Date(2019,06,20), 38],
        [new Date(2019,06,22), 38],
        [new Date(2019,06,23), 38],
        [new Date(2019,06,24), 38],
        [new Date(2019,06,25), 38],
        [new Date(2019,07,07), 38],
        [new Date(2019,07,08), 38],
        [new Date(2019,07,09), 38],
        [new Date(2019,07,10), 38],
        [new Date(2019,07,12), 38],
        [new Date(2019,07,13), 38],
        [new Date(2019,07,14), 38],
        [new Date(2019,07,15), 38],
        [new Date(2019,07,17), 38],
        [new Date(2019,07,18), 38],
        [new Date(2019,07,21), 38],
        [new Date(2019,07,22), 38],
        [new Date(2019,07,23), 38],
        [new Date(2019,07,24), 38],
        [new Date(2019,07,25), 38],
        [new Date(2019,07,27), 38],
        [new Date(2019,07,28), 38],
        [new Date(2019,07,29), 38],
        [new Date(2019,07,30), 38],
        [new Date(2019,07,31), 38],
        [new Date(2019,08,01), 38],
        [new Date(2019,08,03), 39],
        [new Date(2019,08,04), 39],
        [new Date(2019,08,05), 39],
        [new Date(2019,08,06), 39],
        [new Date(2019,08,07), 39],
        [new Date(2019,08,08), 39],
        [new Date(2019,08,10), 39],
        [new Date(2019,08,11), 39],
        [new Date(2019,08,12), 39],
        [new Date(2019,08,13), 39],
        [new Date(2019,08,14), 39],
        [new Date(2019,08,15), 39],
        [new Date(2019,08,17), 39],
        [new Date(2019,09,08), 39],
        [new Date(2019,09,09), 39],
        [new Date(2019,09,10), 39],
        [new Date(2019,09,11), 39],
        [new Date(2019,09,12), 39],
        [new Date(2019,09,14), 39],
        [new Date(2019,09,15), 39],
        [new Date(2019,09,17), 40],
        [new Date(2019,09,18), 40],
        [new Date(2019,09,19), 40],
        [new Date(2019,09,21), 40],
        [new Date(2019,09,22), 40],
        [new Date(2019,09,23), 40],
        [new Date(2019,09,24), 40],
        [new Date(2019,09,25), 40],
        [new Date(2019,09,26), 40],
        [new Date(2019,09,28), 40],
        [new Date(2019,09,29), 40],
        [new Date(2019,09,30), 40],
        [new Date(2019,09,31), 40],
        [new Date(2019,10,01), 40],
        [new Date(2019,10,02), 40],
        [new Date(2019,10,04), 40],
        [new Date(2019,10,05), 40],
        [new Date(2019,10,06), 40],
        [new Date(2019,10,07), 40],
        [new Date(2019,10,08), 40],
        [new Date(2019,10,09), 40],
        [new Date(2019,10,11), 40],
        [new Date(2019,10,12), 40],
        [new Date(2019,10,13), 40],
        [new Date(2019,10,14), 40],
        [new Date(2019,10,15), 40],
        [new Date(2019,10,16), 40],
        [new Date(2019,10,18), 40],
        [new Date(2019,10,19), 40],
        [new Date(2019,11,10), 40],
        [new Date(2019,11,11), 40],
        [new Date(2019,11,12), 40],
        [new Date(2019,11,13), 40],
        [new Date(2019,11,14), 40],
        [new Date(2019,11,16), 41],
        [new Date(2019,11,17), 41],
      ]);

      var options = {
       chart: {
         title: 'Number of authors',
         subtitle: 'Unique contributors in git'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('author_count'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }