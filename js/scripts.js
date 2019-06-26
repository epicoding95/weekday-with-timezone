
var date;
$(document).ready(function() {
  $('#submit').on('click', function(){
    date = new Date($('#born').val());
    var day = date.getDate();
    day= +(10000);
    var month = date.getMonth();
    var year = date.getFullYear();
    // alert([day, month, year]);
  });
  $("#new-contact").submit(function(event) {
    event.preventDefault();

    var dob = $("#born").val();
    // var day = parseInt($("input#day").val());
    // var month = parseInt($("input#month").val());
    // var year = parseInt($("input#year").val());
  //   var myDate = new Date(year, month, day);
  // var arrayDate  =[
  //   [0, "Sunday"], [1, "monday"], [2, "tuesday"], [3, "wednesday"], [4, "thursday"], [5, "friday"], [6, "saturday"]
  // ];
  // var dayName= myDate.getDay();
  // var resultDay="";
  // for (var i=0; i<=arrayDate.length; i++){
  //   if(dayName===arrayDate[i][0]){
  //     resultDay=arrayDate[i][1];
  //     return resultDay;
  //   }


    $("#solution").text(date);

  });
});
