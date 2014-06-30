/*
 * Back To Top - jQuery Plugin
 * version: 1.0.0 (Sunday, June 29 2014)
 * requires jQuery v2.1.0
 *
 * License: MIT
 *
 * Copyright 2014 Vasyl Stokolosa - wystruk@ukr.net
 *
 */

(function ($) {

    $.fn.backToTop = function (options) {

        /* use strict mode */
        'use strict';

        /* variables */
        var footer = $('#js-footer'),
            footerHeight,
            scrollToTop,
            windowHeight,
            methods;

        methods = $.extend({

            //values for .scrollTop() method
            coordinate: 0,
            time: 400,

            //cancel footer height
            footer: true,

            //css style
            left: 'auto',
            right: '20px',
            bottom: '10px'
        }, options);

        return $(this).each(function () {

            /**
             * Click to Button
             * @param coordinate - coordinate top of "content"
             * @param time - time to animation
             */

            function clickButton(element) {
                //check types
                if (typeof methods.coordinate !== 'number' || typeof methods.time !== 'number') {
                    alert('ERROR \n\nUse number type for values \'coordinate\' and \'time\', please!')
                    console.log('Use number type for values \'coordinate\' and \'time\', please!')
                    return false
                }

                //click to button
                $(element).on('click', function () {
                    $('html,body').animate({
                        scrollTop: methods.coordinate
                    }, methods.time );
                });
            }clickButton(this);


            /**
             * FadeOut & FadeIn Button
             *
             */

            function showButton(element) {

                //check if footer is :visible
                if (footer.is(':visible')) {
                } else {
                    alert('ERROR \n\nFooter is not visible, please add id=\'js-footer\' for footer block');
                    console.log('Footer is not visible, please add id=\'js-footer\' for footer block');
                    return false;
                };

                //scroll
                $(window).scroll(function () {
                    scrollToTop = $(window).scrollTop();
                    windowHeight = $(window).height();

                    //fadeIn & fadeOut btn
                    if (scrollToTop >= windowHeight) {
                        $(element).fadeIn();
                    } else if (scrollToTop <= windowHeight){
                        $(element).fadeOut();
                    }

                    footerHeight = footer.offset().top;

                    //check footer and add correct position for btn
                    if ( methods.footer === true && scrollToTop >= footerHeight - windowHeight ) {
                        $(element).addClass('sticky').css({ top: footerHeight - 25 }); // 25 is a button height with space
                    } else {
                        $(element).removeClass('sticky').css({ top: '' });
                    }
                });
            }showButton(this);

            //replace css properties
            $(this).css ({
                left: methods.left,
                right: methods.right,
                bottom: methods.bottom
            });
        });
    };
}(jQuery));
