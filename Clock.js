function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23    HORA BS AS
    var hour1 = date.getHours(); // 0 - 23   HORA NUEVA YOKR
    var hour2 = date.getHours(); // 0 - 23   HORA CALIFORNIA
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var session = "AM";
    var session1 = "AM";
    var session2 = "AM";


    // HORA DE BUENOS AIRES 
    if(hour >= 12){    // HORA EN FORMATO DE 12 HS 
        hour = hour - 12;
        session = "PM";
    }
    if(hour == 0){     
        hour = 12;
    }
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var time = hour + ":" + minutes + ":" + seconds + " " + session;
   
    // HORA DE NUEVA YORK -2 HS QUE BS AS
    hour1=hour1-2;
    if(hour1 >= 12){
        hour1 = hour1 - 12;
        session1="PM";
    }
    if(hour1 == 0){
        hour1 = 12;
    }
    var time1 = hour1 + ":" + minutes + ":" + seconds + " " + session1;   


    // HORA DE CALIFORNIA -5 HS QUE BS
    hour2=hour2-5;
    if(hour2 >= 12){
        hour2 = hour2 - 12;
        session2="PM";
    }
    if(hour2 == 0){
        hour2 = 12;
    }
    var time2 = hour2 + ":" + minutes + ":" + seconds + " " + session2;   

  

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    document.getElementById("MyClockDisplayUno").innerText = time1;
    document.getElementById("MyClockDisplayUno").textContent = time1;

    document.getElementById("MyClockDisplayDos").innerText = time2;
    document.getElementById("MyClockDisplayDos").textContent = time2;
    
    setTimeout(showTime, 1000);    
}

showTime();
