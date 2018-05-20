// Scroll navigation
const scrollNavigation = () => {
    const staticNav = document.getElementById('staticNav');
    const scrollingNav = document.getElementById('scrollingNav');
    const scrollValue = document.documentElement.scrollTop;
    console.log(scrollValue + ', ' + staticNav.clientHeight);

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

window.onscroll = () => {
    scrollNavigation()
};
