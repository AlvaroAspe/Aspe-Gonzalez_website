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
        $("#HoraActual").text(hora+ ":" +minutes);
        $("#franjaHoraria").text("PM");
        setTimeout("showTime()", 1000);
    } else if (hours == 12){
        $("#HoraActual").text(hours+ ":" +minutes);
        $("#franjaHoraria").text("PM");
        setTimeout("showTime()", 1000);
    } 
    else 
        {
        $("#HoraActual").text(hours+ ":" +minutes);
        $("#franjaHoraria").text("AM");
        setTimeout("showTime()", 1000);
        }
    
    }

    
showTime();