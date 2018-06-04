const SendPassCode = (url, data, element) => {
    // New xhr object
    const xhr = new XMLHttpRequest();

    // Listen for ready state change and response status
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 404) {
                // Display error
                displayError(element, 'Errhh! I could not march your passcode. Please look again');
            } else if (xhr.status === 200) {
                location.href = xhr.responseURL;
                console.log(xhr.responseURL);
            }
            console.log(xhr.responseURL);
        }
    };

    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
};

const displayError = (element, message) => {
    // Display message
    element.innerHTML = message;
    element.style.visibility = 'visible';
    element.style.opacity = '1';

    // Remove message after 2 seconds
    setTimeout(() => {
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
    }, 4000);
}
