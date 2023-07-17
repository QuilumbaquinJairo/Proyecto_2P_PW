var prevScrollPos = window.pageYOffset;
var isScrollingDown = false;

function checkScrollDirection() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        isScrollingDown = true;
    } else {
        // Scrolling up
        isScrollingDown = false;
    }

    prevScrollPos = currentScrollPos;
}

function handleAnimation() {
    var animatedElements = document.querySelectorAll('.animated-text');

    animatedElements.forEach(function (element) {
        var elementOffset = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if ((elementOffset < windowHeight && isScrollingDown) || (elementOffset > 0 && !isScrollingDown)) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
}

window.addEventListener('scroll', function () {
    checkScrollDirection();
    handleAnimation();
});
