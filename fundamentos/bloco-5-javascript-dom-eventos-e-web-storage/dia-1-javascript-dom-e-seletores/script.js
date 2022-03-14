document.getElementById("header-container").style.backgroundColor = "green";


document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "salmon";

let emergencyText = document.querySelectorAll(".emergency-tasks h3");

for(let index = 0; index < emergencyText.length; index += 1) {
    emergencyText[index].style.backgroundColor = "purple";
}

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "#F5D737";

let noEmergencyText = document.querySelectorAll(".no-emergency-tasks h3");

for(let index2= 0; index2 < noEmergencyText.length; index2 += 1) {
    noEmergencyText[index2].style.backgroundColor = "black"
}

document.getElementById("footer-container").style.backgroundColor = "green";




    


