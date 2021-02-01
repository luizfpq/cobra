 $(function () {
  var timerId = 0;
  var ctr=0;
  var max=10;
  
  timerId = setInterval(function () {
    // interval function
    ctr++;
    $('#blips > .progress-bar').attr("style","width:" + ctr*max + "%");
    
    // max reached?
    if (ctr==max){
      clearInterval(timerId);
    }
    
  }, 250);


  $('.btn-default').click(function () {
    clearInterval(timerId);
  });

});        