// Get elements
const veiwLetter = document.getElementById('viewLetter');

// Scroll navigation
window.onscroll = () => {
    const staticNav = document.getElementById('staticNav');
    const scrollingNav = document.getElementById('scrollingNav');
    const scrollValue = document.documentElement.scrollTop;

    // Check that a user has scrolled at least 20px
    if (scrollValue > 10) {
        // adjust opacity and set Navbar to visible
        const opacityValue = (scrollValue - 40)/staticNav.clientHeight;

        if (opacityValue < 1) {
            scrollingNav.style.visibility = 'visible';
            scrollingNav.style.opacity = `${opacityValue}`;
        } else {
            scrollingNav.style.visibility = 'visible';
            scrollingNav.style.opacity = '1';
        }
    } else {
        // if a user scrolls less than 20px, set navbar to hidden
        scrollingNav.style.visibility = 'hidden';
    }
};

viewLetter.addEventListener('click', () => {
    const letterDiv = document.getElementsByClassName('admissionLetterContainer')[0];
    const letterWrapper = document.getElementsByClassName('admissionLetterWrapper')[0];

    if (letterDiv.clientHeight === 0) {
        letterDiv.style.height = letterWrapper.clientHeight + 30 + 'px';
    } else {
        letterDiv.style.height = '0';
    }
}, false);

// Open Modal
$(document).ready(function(){
    setTimeout(() => {
        $('#indexModal').modal('show');
    }, 2000);
});
