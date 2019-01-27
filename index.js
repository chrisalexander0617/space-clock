console.log("javascript loaded");
console.log("jQuery loaded");

//telling the time
function time()
{
//creating costant for date;
  

const date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

//showing the time in console log in desired formatting 
console.log(hours + ":" +  minutes + ":" + seconds);

// if time is past noon and before midnight
//if(hours > 12 ){hours = hours - 12}

//dding 0 if less than 10
if(hours < 10 ){hours = "0" + hours;}
if(minutes < 10 ){minites = "0" + minutes;}
if(seconds < 10 ){seconds = "0" + seconds;}
  
    if(hours = 23 && minutes = 59 && seconds = 59){
    function refresh()
    {
      const date = new Data);
    }
  }

//adding to html
$("#hours").text(hours + " :"); 
$("#minutes").text(hours + " :");
$("#seconds").text(seconds);

//setting color for the current day 
var weekday = new Array(7);

weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dayOfWeek = date.getDay()

//var for the days 
var sun = $("#sun");
var mon = $("#mon");
var tues = $("#tues");
var wed = $("#wed");
var thurs = $("#thurs");
var fri = $("#fri");
var sat = $("#sat");


var currentDay = weekday[date.getDay()];
console.log(currentDay);

if(dayOfWeek == 0){

    console.log("Today is Sunday");
    $(sun).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");

}   

if(dayOfWeek == 1){

    console.log("Today is Monday");
    $(mon).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

if(dayOfWeek == 2){

    console.log("Today is tuesday");
    $(tues).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

if(dayOfWeek == 3){

    console.log("Today is Wednesday");
    $(wed).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

if(dayOfWeek == 4){

    console.log("Today is Thursday");
    $(thurs).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

if(dayOfWeek == 5){

    console.log("Today is Friday");
    $(fri).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

if(dayOfWeek == 6){

    console.log("Today is Saturday");
    $(sat).addClass("active");
    console.log("removing classes for sibling elements");
    ("p").siblings().removeClass("active");
}

}//end of the clock funciton 
//setting how often clock resets itself to retrieve current date (milliseconds)
setInterval(time, 1000);