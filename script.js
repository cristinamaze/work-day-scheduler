$(document).ready(function () {

//Current Date and Time//
var today = moment();
$("#currentDay").text(today.format("[It is currently:] MMMM Do YYYY, h:mm a"));

//Pull from Local Storage//
// localStorage.setItem("input-text", JSON.stringify(input-text));
// localStorage.getItem("input-text")

// //Save Button & click event//
// $(document).ready(function () {

// })

// saveBtn.on("click", function(){

// })

//Check Time//
let timeCheck = function() {
    var currentTime = moment().hour();

    $(".input-text").each(function(){
        var timeblock = parseInt($(this).attr("id"));
        console.log(timeblock, currentTime)
    


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

//Reset Each Day//
// var currentDay = moment().format("MMMM Do YYYY");

timeCheck()
})
