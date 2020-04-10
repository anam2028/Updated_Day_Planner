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

// save note in local storage...
// identify the key and reproduce for all the same attributes..

//when load first time get the data from local storage and display on the page.
// at same time figure out the colur for text area and hour

// for color add a class or update with jquery



