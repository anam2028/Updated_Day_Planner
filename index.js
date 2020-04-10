var currentDate = moment().format("dddd MMMM Do");
console.log(currentDate);

// Day of week and month, date

 $("#currentDay").html(currentDate);

  // # id, . class

 $(".SAVE").on("click", function(){
    console.log('SAVE');

    var hour= $(this).attr("data-hour");
    console.log(hour);

    var note = $("textarea[data-hour="+hour+"]").val()
    console.log(note);

 })




