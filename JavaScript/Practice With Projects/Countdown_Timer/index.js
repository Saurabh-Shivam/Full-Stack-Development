var spcl = new Date("oct 4, 2021 12:00:00").getTime();

var x = setInterval(function(){

    var current = new Date().getTime();

    var diff = spcl - current; // This will give the result in millisecond as getTime() returns the time in milliseconds

    var days = Math.floor(diff / (1000*60*60*24));

    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60)); 

    var minutes = Math.floor((diff % (1000*60*60)) / (1000*60)); 

    var seconds = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById("demo").innerHTML = days +"d, " +hours + "hrs: " +minutes +"m: " +seconds +"s"

}, 1000);
