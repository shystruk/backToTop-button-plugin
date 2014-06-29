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
            windowHeight;

        /**
         * Click to Button
         * @param coordinate - coordinate top of "content"
         * @param time - time to animation
         */

        function clickButton(element, coordinate, time) {
            //check types
            if (typeof coordinate !== 'number' || typeof time !== 'number') {
                alert('ERROR \n\nUse number type for values \'coordinate\' and \'time\', please!')
                return false;
            }

            //click to button
            $(element).on('click', function () {
                $('html,body').animate({
                    scrollTop: coordinate
                }, time );
            });
        };

        /**
         * FadeOut & FadeIn Button
         *
         */

         function showButton(element) {

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

                footerHeight = ( footer.length ) ? footer.offset().top : 0;

                //check footer and add correct position for btn
                if ( scrollToTop >= footerHeight - windowHeight ) {
                    $(element).addClass('sticky').css({ top: footerHeight - 25 }); // 25 is a button height with space
                } else {
                    $(element).removeClass('sticky').css({ top: '' });
                }
            });
        };

        var methods = $.extend({
            clickBtn: clickButton(this, 0, 400),
            showBtn: showButton(this),

            //css style
            left: 'auto',
            right: '20px',
            bottom: '10px'

        }, options);

        return this.css ({
            left: methods.left,
            right: methods.right,
            bottom: methods.bottom
        });
    };
}(jQuery));
