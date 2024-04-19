

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
    const randomTime = (Math.random() * 10000) + 2000;
    setTimeout(function() {
        console.log("Waited for " + randomTime + " milliseconds.");
        document.getElementById("slowToEnable").disabled = false;
    }, randomTime);
}

function percentChance(chance) {
    if (Math.random() <= chance)
        return true;
    else
        return false;
}

function startFlakyProcess() {
    if (percentChance(0.3)) {
        console.log("Process will start soon...")
        setTimeout(function() {
            window.open("processStarted.html", "_self");
        }, 3000);
    } else {
        console.log('FAIL: process will not start');
    }
}

function openFileChooser() {
    document.getElementById('fileInput').click();
}

waitToEnable(10000);