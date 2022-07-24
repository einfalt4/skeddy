// creating date moment
var todaysDate = moment().format('ddd') + " " + moment().format("MMM YYYY");
var theHour = moment().format('h:mm:ss a');
// variables for each hour
var nineAmBlock = $("#9am");
var tenAmBlock = $("#10am");
var elevenAmBlock = $("#11am");
var twelvePmBlock = $("#12pm");
var onePmBlock = $("#1pm");
var twoPmBlock = $("#2pm");
var threePmBlock = $("#3pm");
var fourPmBlock = $("#4pm");
var fivePmBlock = $("#5pm");
var sixPmBlock = $("#6pm");
var sevenPmBlock = $("#7pm");
// variables for block text
var hour = moment().hours();
var textInput;
var timeSpan;

// setting date at top of page to current time
var interval = setInterval(function() {
    var nowMoment = moment();
    $('#currentDay').html(nowMoment.format('YYYY MMMM DD') + ' '
                        + nowMoment.format('dddd')
                        .substring(0,3).toUpperCase());
    $('#currentDay').html(todaysDate + " " + nowMoment.format('hh:mm:ss a'));
}, 100);

// creating different functions for past/present/future
function background () {

    $(".form-control").each(function () {
        var timeCtrl = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeCtrl);
        console.log(hour);

        if (hour > timeCtrl) {
            $(this).addClass("past");
        } else if(hour < timeCtrl) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

// console logging/creating input into local storage by hour
function mainPage() {

    console.log("Current Time " + hour);

    var mainNine = JSON.parse(localStorage.getItem("9:00am"));
    nineAmBlock.val(mainNine);

    var mainTen = JSON.parse(localStorage.getItem("10:00am"));
    tenAmBlock.val(mainTen);

    var mainEleven = JSON.parse(localStorage.getItem("11:00am"));
    elevenAmBlock.val(mainEleven);

    var mainTwelve = JSON.parse(localStorage.getItem("12:00pm"));
    twelvePmBlock.val(mainTwelve);

    var mainOne = JSON.parse(localStorage.getItem("1:00pm"));
    onePmBlock.val(mainOne);

    var mainTwo = JSON.parse(localStorage.getItem("2:00pm"));
    twoPmBlock.val(mainTwo);

    var mainThree = JSON.parse(localStorage.getItem("3:00pm"));
    threePmBlock.val(mainThree);

    var mainFour = JSON.parse(localStorage.getItem("4:00pm"));
    fourPmBlock.val(mainFour);

    var mainFive = JSON.parse(localStorage.getItem("5:00pm"));
    fivePmBlock.val(mainFive);

    var mainSix = JSON.parse(localStorage.getItem("6:00pm"));
    sixPmBlock.val(mainSix);

    var mainSeven = JSON.parse(localStorage.getItem("7:00pm"));
    sevenPmBlock.val(mainSeven);
}

// saving inputs into local storage
$(document).ready(function() {
    mainPage()
    background()

    $(".saveBtn").on("click", function() {
        textInput = $(this).siblings(".form-control").val().trim();
        console.log(textInput);
        timeSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(timeSpan);
        localStorage.setItem(timeSpan, JSON.stringify(textInput));
    })
})
