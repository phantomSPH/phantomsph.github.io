    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'test(ifort)');
      data.addColumn('number', 'testkd(ifort)');
      data.addColumn('number', 'test(gfortran)');
      data.addColumn('number', 'testkd(gfortran)');
      data.addRows([
        [new Date(2017,2,03),60.98,83.02,67.19,98.59],
        [new Date(2017,2,10),56.81,80.25,66.31,101.5],
        [new Date(2017,2,14),57.5,81,67.25,98.62],
        [new Date(2017,2,15),59.5,80.25,70,98.12],
        [new Date(2017,2,20),56.88,81,67.38,99],
        [new Date(2017,2,25),57.75,81,67,98.5],
        [new Date(2017,2,29),57.75,81.5,68,97.75],
        [new Date(2017,3,01),64.3,84.29,78.27,101.57],
        [new Date(2017,3,11),61.75,82.81,71.06,99.94],
        [new Date(2017,3,13),65.75,88.25,74.62,98.62],
        [new Date(2017,3,22),62.62,85.88,71.88,99.5],
        [new Date(2017,3,26),62,86.5,70.75,100.75],
        [new Date(2017,3,27),75.25,114.75,106.5,115.25],
        [new Date(2017,3,29),64.5,83.25,69.25,99.75],
        [new Date(2017,4,03),62.3,82.16,74.09,104.62],
        [new Date(2017,4,04),62.22,83.06,70.91,100.5],
        [new Date(2017,4,05),62.56,86.44,70.38,101.69],
        [new Date(2017,4,06),61.88,86.44,69.62,101.06],
        [new Date(2017,4,12),55.75,83.69,67.62,100.5],
        [new Date(2017,4,17),121.62,88.5,74,102.75],
        [new Date(2017,4,18),119.5,88,73.75,101.75],
        [new Date(2017,4,19),115.38,86.88,71.88,102],
        [new Date(2017,4,20),118.75,89.5,75.62,100.75],
        [new Date(2017,4,22),117,88.5,78.38,101.38],
        [new Date(2017,4,23),119.62,95.88,85.38,108.75],
        [new Date(2017,4,25),113,93.25,77,106],
        [new Date(2017,4,26),121,97.75,74,104],
        [new Date(2017,4,27),119,88.75,74.5,102.75],
        [new Date(2017,4,31),119.75,90.5,79,105.25],
        [new Date(2017,5,01),126.31,88.49,78.11,105.11],
        [new Date(2017,5,02),126.58,92.84,79.42,108.27],
        [new Date(2017,5,05),123.91,89.69,89,126.25],
        [new Date(2017,5,06),121.91,93.25,74.31,105.19],
        [new Date(2017,5,07),119.06,89,75.06,102.31],
        [new Date(2017,5,08),113.75,93.12,73,103.44],
        [new Date(2017,5,09),117.12,92.38,77.19,102.56],
        [new Date(2017,5,10),108.19,500.0,73,500.0],
        [new Date(2017,5,12),112.12,89.81,75.62,102.75],
        [new Date(2017,5,13),107.25,87.25,72.25,102],
        [new Date(2017,5,14),112.12,93.12,73.88,106.12],
        [new Date(2017,5,15),118.38,98,87.12,117.5],
        [new Date(2017,5,16),110.5,92.12,90,116],
        [new Date(2017,5,17),123.5,95.75,101.25,116.12],
        [new Date(2017,5,19),134.75,116.5,75.75,103.62],
        [new Date(2017,5,20),109.25,88.12,74,103.5],
        [new Date(2017,5,24),63.25,83.75,91.75,112.38],
        [new Date(2017,5,26),131.75,104.25,94,153.75],
        [new Date(2017,5,27),113.5,99,94.5,117.25],
        [new Date(2017,5,28),68.75,94,93.25,119],
        [new Date(2017,6,05),60.41,85.5,72.53,103.81],
        [new Date(2017,6,06),70.78,91.81,75.69,103.69],
        [new Date(2017,6,11),63.62,88.5,69.19,101.25],
        [new Date(2017,6,22),72.88,92.88,89.75,121.88],
        [new Date(2017,6,25),110.5,135.75,187,176.25],
        [new Date(2017,6,27),161.75,122.5,101,136.5],
        [new Date(2017,7,03),64.62,84.7,73.44,102.38],
        [new Date(2017,7,04),61.22,91.09,98.97,137.25],
        [new Date(2017,7,05),62.75,87.88,119.12,125.69],
        [new Date(2017,7,07),68.38,92.12,74.44,104.56],
        [new Date(2017,7,12),86.88,119.88,89.38,133],
        [new Date(2017,7,16),89.38,197.62,112.25,132.62],
        [new Date(2017,7,22),62.62,86.5,71,102.88],
        [new Date(2017,7,26),65.25,500.0,70.5,500.0],
        [new Date(2017,7,28),60,83.25,66.5,95.75],
        [new Date(2017,7,29),62,84.5,66,95.5],
        [new Date(2017,7,30),64.5,85.5,68.5,96.5],
        [new Date(2017,8,02),60.62,85.19,68.55,95.33],
        [new Date(2017,8,04),67.72,87.22,84.88,103.38],
        [new Date(2017,8,06),63.03,83.97,68.56,95.5],
        [new Date(2017,8,09),62.31,84.12,68.81,97.06],
        [new Date(2017,8,16),64.75,84.88,69.12,95.62],
        [new Date(2017,8,23),63.75,87.88,68,96.88],
        [new Date(2017,8,25),62.25,89,73.5,97.25],
        [new Date(2017,8,26),60.5,85,67.5,95.25],
        [new Date(2017,8,28),102.25,93.75,87.25,104],
        [new Date(2017,8,29),61.75,87.25,71,94.25],
        [new Date(2017,9,07),65.25,87.94,73.88,97.62],
        [new Date(2017,9,09),66,91.81,72.75,98.81],
        [new Date(2017,9,12),68.5,93.06,70.38,97.38],
        [new Date(2017,9,13),65.38,92.38,69.5,97.88],
        [new Date(2017,9,14),66,89.62,69.75,96.75],
        [new Date(2017,9,16),68.62,94.75,74.38,98.38],
        [new Date(2017,9,17),73.25,95.62,78,99.88],
        [new Date(2017,9,19),72.5,92.88,83.25,104.62],
        [new Date(2017,9,23),62.12,88.38,72,109.75],
        [new Date(2017,9,24),60.62,85.62,71.62,98],
        [new Date(2017,10,08),92.19,126.38,109.5,140.75],
        [new Date(2017,10,09),102.25,105.75,87.81,111],
        [new Date(2017,10,10),104.56,107.12,129.69,129.62],
        [new Date(2017,10,14),107.5,122,120.25,132.62],
        [new Date(2017,10,15),102.62,117.12,100.38,117.5],
        [new Date(2017,10,16),115.5,135.5,107.25,139.88],
        [new Date(2017,10,17),77,117.62,79.62,116.25],
        [new Date(2017,10,18),88.88,108.5,74.75,119.25],
        [new Date(2017,10,20),84.38,119.5,86.5,143.62],
        [new Date(2017,10,21),72,106,73.75,119.88],
        [new Date(2017,10,22),82.5,113.88,67.75,113],
        [new Date(2017,10,23),91.25,128.75,66.62,118.25],
        [new Date(2017,10,24),64.75,107.62,85.88,103.5],
        [new Date(2017,10,25),65.75,99.5,114.75,110.5],
        [new Date(2017,10,28),85,137.5,74.5,116],
        [new Date(2017,10,29),78.25,110.75,77.25,119],
        [new Date(2017,10,30),75.25,113.25,79,111],
        [new Date(2017,11,02),87.89,109.77,88.61,123.17],
        [new Date(2017,11,04),85.25,106.41,92.06,120.34],
        [new Date(2017,11,05),65.78,93.66,68.12,114.66],
        [new Date(2017,11,06),73.34,95.78,62.19,106.69],
        [new Date(2017,11,07),63.56,105.88,500.0,500.0],
        [new Date(2017,11,12),61.06,101.94,500.0,500.0],
        [new Date(2017,11,15),81.12,120.75,500.0,500.0],
        [new Date(2017,11,16),61.12,130.38,500.0,500.0],
        [new Date(2017,11,19),67.62,120.12,500.0,500.0],
        [new Date(2018,0,11),50.88,82.25,500.0,500.0],
        [new Date(2018,0,12),63.31,96.38,113.62,174.12],
        [new Date(2018,0,13),53.75,86.62,57.12,95.12],
        [new Date(2018,0,17),49.75,84.12,57,95.12],
        [new Date(2018,0,18),53.5,87.5,64.5,101],
        [new Date(2018,0,19),55.62,84.62,54.5,88.38],
        [new Date(2018,0,20),76.5,118.62,103.88,120.12],
        [new Date(2018,0,22),95,500.0,93.25,500.0],
        [new Date(2018,0,23),94.5,135.62,79.12,119.25],
        [new Date(2018,0,25),91.5,129.25,85.5,105.25],
        [new Date(2018,0,29),92.75,152,121,138.5],
        [new Date(2018,0,31),78.5,111.75,94.25,141.25],
        [new Date(2018,1,01),115.08,109.96,79.3,113.02],
        [new Date(2018,1,02),102.7,143.38,84.95,129.42],
        [new Date(2018,1,03),76.62,105.33,80.16,137.66],
        [new Date(2018,1,05),104.78,129.38,108.16,129.91],
        [new Date(2018,1,09),101.5,173.31,114.81,139.38],
        [new Date(2018,1,16),115.12,124.12,127.38,135.25],
        [new Date(2018,1,17),89.88,129.62,110.38,120.75],
        [new Date(2018,1,19),75.25,113.5,124.5,143],
        [new Date(2018,1,20),82.62,109.12,112.38,110.62],
        [new Date(2018,1,22),85.5,118.88,90.62,112.62],
        [new Date(2018,1,27),68.25,109.25,76.5,127.5],
        [new Date(2018,1,28),126.25,98,75.75,125.75],
        [new Date(2018,2,02),56.62,86.44,59.2,96.53],
        [new Date(2018,2,06),57.75,93.38,66.25,101.88],
        [new Date(2018,2,07),59.31,87.44,69.44,94.25],
        [new Date(2018,2,08),61.56,99.38,61,94.75],
        [new Date(2018,2,09),55.12,91.06,60.12,93.94],
        [new Date(2018,2,10),55.56,91.44,63.06,102.69],
        [new Date(2018,2,12),55.81,86.31,60.25,93.25],
        [new Date(2018,2,14),52.38,83.62,59.62,93.88],
        [new Date(2018,2,15),62.38,90.25,59.5,94.75],
        [new Date(2018,2,17),58.88,87.12,60.12,95],
        [new Date(2018,2,19),53.62,85,62.38,94.62],
        [new Date(2018,2,20),53.62,84.62,60.12,94.12],
        [new Date(2018,2,21),55.88,90,60.88,95.12],
        [new Date(2018,2,26),53.5,85.75,60.5,95.25],
        [new Date(2018,2,27),54.5,87,60.75,94.25],
        [new Date(2018,2,28),53,500.0,61,500.0],
        [new Date(2018,2,29),53,86.25,61.5,96.5],
        [new Date(2018,3,06),181.38,88.19,62.44,96.38],
        [new Date(2018,3,09),54.19,85.56,61.5,95.38],
        [new Date(2018,3,11),61.06,88.56,62.44,95.88],
        [new Date(2018,3,13),57.25,87.5,60.62,96.25],
        [new Date(2018,3,14),57.75,86.5,63.5,102.5],
        [new Date(2018,3,16),54.62,90.12,67.75,97.62],
        [new Date(2018,3,17),54.38,87.5,69.62,96.5],
        [new Date(2018,3,18),55.62,85.12,61.5,95.5],
        [new Date(2018,3,21),54.75,86.12,63.62,95.12],
        [new Date(2018,3,27),59,88.25,63,96.25],
        [new Date(2018,3,28),56,85.25,61.75,125],
        [new Date(2018,4,02),54.8,89.95,64.08,96],
        [new Date(2018,4,03),58.81,85.92,60.97,95.81],
        [new Date(2018,4,05),56.91,95.66,61.91,96.22],
        [new Date(2018,4,07),59.56,88.44,61.31,96.44],
        [new Date(2018,4,09),54.56,86.44,63.88,97.06],
        [new Date(2018,4,12),76.19,86.94,65.25,95.88],
        [new Date(2018,4,14),55,88.25,62.62,98.38],
        [new Date(2018,4,15),54.62,88,72.38,98],
        [new Date(2018,4,16),54.12,85.75,62,95.75],
        [new Date(2018,4,17),58.88,87.88,109.88,96.38],
        [new Date(2018,4,18),66.12,89.38,61.25,96.88],
        [new Date(2018,4,19),57,100.75,60.75,95.25],
        [new Date(2018,4,21),56.12,84.5,63.12,96.12],
        [new Date(2018,4,23),55.12,87.75,62.62,95.38],
        [new Date(2018,4,24),53.62,92.88,63.25,96.25],
        [new Date(2018,4,25),55.5,86.25,61.25,98.75],
        [new Date(2018,4,28),55.75,88.75,62.25,95],
        [new Date(2018,4,29),55,86,64,96.75],
        [new Date(2018,4,30),57.5,85,62.5,95.5],
        [new Date(2018,5,05),55.5,86.44,65.06,107.12],
        [new Date(2018,5,12),55.25,88.62,63.38,97.38],
        [new Date(2018,5,13),56.38,92.88,61.5,96.5],
        [new Date(2018,5,14),55.5,87.25,64.75,97.62],
        [new Date(2018,5,18),57.75,86.25,61.75,95.88],
        [new Date(2018,5,20),53.75,85.12,63.5,96.88],
        [new Date(2018,5,21),53.38,93.5,62.5,98.12],
        [new Date(2018,6,11),64.12,91.69,75,95.5],
        [new Date(2018,6,12),77,86.31,75.88,96.25],
        [new Date(2018,6,13),72,92.25,73.38,96],
        [new Date(2018,6,14),65.38,94.88,73.5,96.25],
        [new Date(2018,6,16),65.5,106.5,72.25,95.5],
        [new Date(2018,6,18),66.25,88.75,71.88,99.12],
        [new Date(2018,6,19),66.62,88.5,500.0,104.62],
        [new Date(2018,6,20),68.62,94.25,76,102.25],
        [new Date(2018,6,23),68.5,92.62,74,102.12],
        [new Date(2018,6,28),66.5,90.25,74.75,101.25],
        [new Date(2018,7,04),73.5,90.16,74.25,101.94],
        [new Date(2018,7,07),67.81,90.75,74.25,102.69],
        [new Date(2018,7,08),70.25,95.88,75.12,102.88],
        [new Date(2018,7,09),70.31,122.56,73.5,100.75],
        [new Date(2018,7,11),66.75,95.75,74.75,102.81],
        [new Date(2018,7,18),103.75,90.75,74.75,101.62],
        [new Date(2018,7,21),83.75,99.75,75.5,102],
        [new Date(2018,7,24),71.88,91.12,76.12,102.5],
        [new Date(2018,7,25),70.25,91.5,76,102.25],
        [new Date(2018,7,28),66.25,89.75,75.5,109],
        [new Date(2018,8,11),72.75,91.31,76.19,102.56],
        [new Date(2018,8,13),83.38,124.12,75.62,101.75],
        [new Date(2018,8,14),72.12,88.38,76.12,103.12],
        [new Date(2018,8,19),80.38,91.25,86,104.38],
        [new Date(2018,9,11),97.31,85.69,88.56,103.31],
        [new Date(2018,9,13),97.25,85.12,84.62,101.5],
        [new Date(2018,9,16),71.62,82.88,82.5,102],
        [new Date(2018,9,17),70,101,84.12,103.88],
        [new Date(2018,9,18),70.38,85.88,81.62,102],
        [new Date(2018,9,19),70.75,83.38,82,102.12],
        [new Date(2018,9,20),71.25,83.5,83.38,102.25],
        [new Date(2018,9,22),73.75,83.38,82.62,102.5],
        [new Date(2018,9,29),78,83.25,91,103.25],
        [new Date(2018,10,06),80.97,96.34,90,102.06],
        [new Date(2018,10,09),79.19,89,91.19,104.81],
        [new Date(2018,10,10),100.38,94.19,90.31,101.56],
        [new Date(2018,10,15),80.38,95.88,92.5,103.75],
        [new Date(2018,10,16),247.75,144,93.12,103.75],
        [new Date(2018,10,19),81.75,85.25,92.75,108],
        [new Date(2018,10,20),78.88,83.5,92.38,103.88],
        [new Date(2018,10,21),77.62,83.62,92.5,104.12],
        [new Date(2018,10,22),160,90.62,90.38,102],
        [new Date(2018,10,29),78.25,86,91.5,108.25],
        [new Date(2018,11,01),79.05,91.09,90.61,103.56],
        [new Date(2018,11,04),118.56,85.5,94.59,105.28],
        [new Date(2018,11,17),84.38,84.62,90.75,103.5],
        [new Date(2018,11,18),89.38,123.12,94.5,108.5],
        [new Date(2018,11,19),87.88,93,96,109.25],
        [new Date(2019,0,16),79.75,89.75,94,110.5],
        [new Date(2019,0,17),78.12,86.5,97.88,108.12],
        [new Date(2019,0,18),78,87.75,94.38,109.12],
        [new Date(2019,0,19),79.38,88.12,94.25,117.12],
        [new Date(2019,0,21),77.88,86.62,94.12,109],
        [new Date(2019,1,07),98.94,87.25,98.56,109],
        [new Date(2019,1,09),77.25,86.81,93.38,109.25],
        [new Date(2019,1,11),80.31,86.62,93,108.06],
        [new Date(2019,1,12),79.25,87,92.5,107.62],
        [new Date(2019,1,13),80.5,85.38,93.25,108.88],
        [new Date(2019,1,14),78,89.75,93.75,108.75],
        [new Date(2019,1,15),78.38,86.25,94.38,109],
        [new Date(2019,1,16),77.75,120.38,98.25,108.12],
        [new Date(2019,1,18),80.88,88,100.5,112.12],
        [new Date(2019,1,20),83.38,88,94.5,108.62],
        [new Date(2019,1,21),78.12,86.88,96.5,106.62],
        [new Date(2019,1,22),78.12,86.88,96.5,106.62],
        [new Date(2019,1,25),81.75,87,102,105.75],
        [new Date(2019,1,27),85.25,102.5,97,108.75],
        [new Date(2019,2,01),93.79,88.65,96.91,106.93],
        [new Date(2019,2,06),80.62,97.38,95.94,126.88],
        [new Date(2019,2,08),86.5,88.06,95.31,108],
        [new Date(2019,2,09),82.69,89.25,96,109.25],
        [new Date(2019,2,11),80.25,88.5,96,112.31],
        [new Date(2019,2,12),83.25,101.44,94.88,108.38],
        [new Date(2019,2,13),86.25,89.75,97.75,109.25],
        [new Date(2019,2,15),300.12,92.38,105.38,119.88],
        [new Date(2019,2,22),224.38,195.12,330.62,288],
        [new Date(2019,2,25),81.75,90.25,98,112],
        [new Date(2019,2,28),80.5,87.25,95,107.5],
        [new Date(2019,4,30),79,91,94.25,107.75],
        [new Date(2019,5,06),79,91,94.25,107.75],
        [new Date(2019,5,18),79,91,94.25,107.75],
        [new Date(2019,5,20),79,91,94.25,107.75],
        [new Date(2019,5,22),79,91,94.25,107.75],
        [new Date(2019,5,25),79,91,94.25,107.75],
        [new Date(2019,5,27),79,91,94.25,107.75],
        [new Date(2019,7,07),84.25,106.12,96.69,119.94],
        [new Date(2019,7,08),83.38,106.75,96.12,121.25],
        [new Date(2019,7,10),83.75,105.75,97.25,121.12],
        [new Date(2019,7,13),82.5,106.12,214.75,145.38],
        [new Date(2019,7,14),83.25,107.12,98.75,121.5],
        [new Date(2019,7,16),84,107,1308.25,1520.12],
        [new Date(2019,7,18),84,110.12,97.75,122.38],
        [new Date(2019,7,29),88,155.25,100.25,123.25],
        [new Date(2019,7,30),252.75,120.75,99.5,124.75],
        [new Date(2019,7,31),86.5,109.75,105.25,125.25],
        [new Date(2019,8,03),92.06,111.38,97.5,122.84],
        [new Date(2019,8,05),122.12,109.16,107.44,130.59],
        [new Date(2019,8,06),91.34,113.31,135.25,123],
        [new Date(2019,8,14),84.75,109.12,100.25,124.25],
        [new Date(2019,9,16),87.62,109.5,500.0,500.0],
        [new Date(2019,10,13),87,109.88,100.12,123.12],
        [new Date(2019,10,19),87.5,110.62,99.62,123.25],
        [new Date(2019,11,10),85.56,106.56,109.81,125.69],
        [new Date(2019,11,12),84.56,109.19,99,125.12],
        [new Date(2019,11,13),97.75,114,99.88,123.88],
        [new Date(2019,11,14),85.5,107.12,102.12,123.88],
        [new Date(2019,11,16),79.25,86.75,97.38,109],
        [new Date(2019,11,17),79.88,86.5,96.5,109.88],
      ]);

      var options = {
       chart: {
         title: 'Testbot timings',
         subtitle: 'Walltime used for nightly tests (s)'
        },
   axes: { 
       y: { 
          all: {       
             range: {  
                max:200,
                min: 0 
             } 
          }
       }
    },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('testbot_timing'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }