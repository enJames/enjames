const speakToMe = document.getElementById('speakToMe');

speakToMe.addEventListener('click', () => {
    // Get elements
    const erresponse = document.getElementById('erresponse');
    const passcodeInput = document.getElementById('passcode');
    const passcode = passcodeInput.value;

    if (passcode.length === 0) {
        displayError(erresponse, 'Woops! Looks like you have not entered a code');
    } else if (passcode.length < 4 || passcode.length > 4) {
        displayError(erresponse, 'I think the code is invalid');
    } else {
        const ResObject = { passcode };

        console.log(passcode);
        console.log(ResObject);

        SendPassCode('/', ResObject, erresponse); // Send passcode to server
    }
}, false);
