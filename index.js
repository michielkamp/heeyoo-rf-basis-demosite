function showAlertBox() {
    alert("Hallo!");
    document.getElementById("slowToEnable").disabled = true;
    waitToEnable();
}

function showInputBox() {
    const myName = prompt("Wat is je naam?");
    if (myName != null) {
        document.getElementById("showMyName").innerHTML =
            "Hallo " + myName + "!";
    }
}

function waitToEnable() {
    setTimeout(function() {
        console.log("Wait 5 seconds to enable button");
        document.getElementById("slowToEnable").disabled = false;
    }, 5000);
}

function percentChance(chance) {
    if (Math.random() <= chance)
        return true;
    else
        return false;
}

function startFlakyProcess() {
    if (percentChance(0.5)) {
        console.log("Process will start soon...")
        setTimeout(function() {
            window.open("processStarted.html", "_self");
        }, 3000);
    } else {
        console.log('FAIL: process will not start');
    }
}

waitToEnable(10000);
