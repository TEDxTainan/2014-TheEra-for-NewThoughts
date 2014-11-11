      var startDate = new Date();
      var endDate = new Date('2014/11/08 21:00');
      var spantime = (endDate - startDate)/1000;
       $(document).ready(function () {
              $(this).everyTime('1s', function(i) {
                  spantime --;
                   var d = Math.floor(spantime / (24 * 3600)).toString();
                   var h = Math.floor((spantime % (24*3600))/3600).toString();
                   var m = Math.floor((spantime % 3600)/(60)).toString();
                   var s = Math.floor(spantime%60).toString();
       
                   if(spantime>0){
                      
                      d = d.length == 1 ? '0' + d : d; 
                      h = h.length == 1 ? '0' + h : h; 
                      m = m.length == 1 ? '0' + m : m; 
                      s = s.length == 1 ? '0' + s : s; 
                      $("#day").text(d);
                      $("#hour").text(h);
                      $("#min").text(m);
                      $("#sec").text(s);
                   }else{ // 避免倒數變成負的
                      $("#day").text(0);
                      $("#hour").text(0);
                      $("#min").text(0);
                      $("#sec").text(0);
                   }
               });
         });
 

