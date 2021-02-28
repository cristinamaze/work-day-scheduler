$(document).ready(function () {

//Current Date and Time//
var today = moment();
$("#currentDay").text(today.format("[It is currently:] MMMM Do YYYY, h:mm a"));

//Pull from Local Storage//
$("#9 .text-input").val(localStorage.getItem("9"));
$("#10 .text-input").val(localStorage.getItem("10"));
$("#11 .text-input").val(localStorage.getItem("11"));
$("#12 .text-input").val(localStorage.getItem("12"));
$("#13 .text-input").val(localStorage.getItem("13"));
$("#14 .text-input").val(localStorage.getItem("14"));
$("#15 .text-input").val(localStorage.getItem("15"));
$("#16 .text-input").val(localStorage.getItem("16"));
$("#17 .text-input").val(localStorage.getItem("17"));

// //Save Button & Push to Local Storage//
$("saveBtn").click(function() {
    var input = $(this).siblings(".text-input").val();
    var block = $(this).siblings("id").text();
    localStorage.setItem(input, block);
});

//Check Time//
let timeCheck = function() {
    var currentTime = moment().hour();

    $(".text-input").each(function(){
        var timeblock = parseInt($(this).attr("id"));

    //Timeblock Color Display//
    if (timeblock === currentTime) {
        $(this).addClass("present")
    }

    else if (timeblock < currentTime) {
        $(this).addClass("past")
    }

    else {
        $(this).addClass("future")
    };
    })
}; 

timeCheck()

})
