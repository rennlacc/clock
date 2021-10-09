
let format24 = true,
    timeDisplay = document.getElementById("time"),
    changeButton = document.getElementById("changeFormat");
let updateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
        console.log('hours :>> ', hours);
        hours = hours < 10 ? "0" +  hours : hours;
        minutes = minutes < 10 ? "0" +  minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
          
        // var suffix = hours >= 12 ? "PM" : "AM",
        // hours12 = hours % 12;


    if(format24) {
        // timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;
        timeDisplay.innerText =` ${hours} : ${minutes} : ${seconds}`;
    }
    else {
        let suffix;
        if (hours >= 12){
            suffix = "PM";
        } else {
            suffix = "AM";
          
        }
        hours12 = hours % 12
          
        hours12 = hours12 < 10 ? `0${hours12}` : hours12;
       

     

        timeDisplay.innerText = hours12 + ":" + minutes + ":" + seconds + " " + suffix;
    }
};

var changeFormat = function() {
    format24 = !format24;
};

changeButton.addEventListener("click", changeFormat);
window.setInterval(updateTime, 100);
