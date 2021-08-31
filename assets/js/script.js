// $("saveBtn").click(function(){
//     var textValue = $(this)."description"
//     localStorage.setItem(textValue)
//   });


// Get Date For Current Day (Day, Month, Date)
//Ex: Thursday, July 15th)
var currentDay =  moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDay);
console.log ("anything")



function hourUpdates(){
    //current number of hours
    var currentHour = moment().hours();

    $('.time-block').each(function() {
        var hourTimeBlocks = parseInt(
            $(this)
              .attr('id')
              .split('-')[1]
        );

        //change color of box depending on time
        if(hourTimeBlocks < currentHour) {
            $(this).addClass('past');
        } else if (hourTimeBlocks === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

hourUpdates();

// $(document).ready(function){
//     $(".saveBtn").on("click", function(){
//         var textValue = $(this)
//         .siblings(".description")
//         .val();
//         var time = $(this)
//         .parent()
//         .attr("id");

//         localStorage.setItem(time,textValue);

    // });

    


    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));