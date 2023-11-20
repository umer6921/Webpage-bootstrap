$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3
            },
        }
    }
    );
});