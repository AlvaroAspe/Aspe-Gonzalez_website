// JavaScript
function showTime(){
    
    var hora;
    
    myDate = new Date();
    hours = myDate.getUTCHours() + 2;
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    if (hours > 12){
        hora = Math.floor(hours%12);
        $("#hora-actual").text(hora+ ":" +minutes);
        $("#franja-horaria").text("PM");
        setTimeout("showTime()", 1000);
    } else if (hours == 12){
        $("#hora-actual").text(hours+ ":" +minutes);
        $("#franja-horaria").text("PM");
        setTimeout("showTime()", 1000);
    } 
    else 
        {
        $("#hora-actual").text(hours+ ":" +minutes);
        $("#franja-horaria").text("AM");
        setTimeout("showTime()", 1000);
        }
    
    }

    
showTime();