
//run the following query only when the whole document is loaded

$(document).ready(function () {

    /*Sticky navigation http://imakewebthings.com/waypoints/guides/jquery-zepto/*/
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '25%'
    });

    /*scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000)
    })

    /*Smooth scrolling for all links https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });






        /*Animations on scroll*/
        $('.js--wp-1').waypoint(function(direction) {
            $(".js--wp-1").addClass('animate__tada'), {offest: '80%'};
        })

        $('.section-steps').waypoint(function(direction) {
            $(".js--wp-2").addClass('animate__fadeInRight'),{offest: '80%'};
        })

        $('.js--wp-3').waypoint(function(direction) {
            $(".js--wp-3").addClass('animate__flipInX'),{offest: '80%'};
        })
        
        $('.section-plans').waypoint(function(direction) {
            $(".js--wp-4").addClass('animate__tada'),{offest: '80%'};
        })

        /*Mobile navigation*/
        $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');

            nav.slideToggle(200)
        })
        



});