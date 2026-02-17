
var counter = 0;

function tickUp() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}

function tickDown() {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}



function runForLoop() {
    var text = "";

    for (var i = 0; i <= counter; i++) {
        text = text + i + " ";
    }

    document.getElementById("forLoopResult").innerHTML = text;
}



function showOddNumbers() {
    var text = "";

    for (var i = 1; i <= counter; i++) {
        if (i % 2 != 0) {
            text = text + i + " ";
        }
    }

    document.getElementById("oddNumberResult").innerHTML = text;
}



function addMultiplesToArray() {
    var arr = [];

    if (counter >= 5) {
        for (var i = counter; i >= 5; i--) {
            if (i % 5 == 0) {
                arr.push(i);
            }
        }
    }

    console.log(arr);
}



function printCarObject() {
    var car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}



function loadCar(num) {
    var car;

    if (num == 1) {
        car = carObject1;
    } else if (num == 2) {
        car = carObject2;
    } else {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}


function changeColor(num) {
    var p = document.getElementById("styleParagraph");

    if (num == 1) {
        p.style.color = "red";
    } else if (num == 2) {
        p.style.color = "green";
    } else {
        p.style.color = "blue";
    }
}
