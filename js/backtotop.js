/*
 * Back To Top - jQuery Plugin
 * version: 1.0.0 (Fri, 14 Jun 2013)
 * requires jQuery v2.1.0
 *
 * License:
 *
 * Copyright 2014 Vasyl Stokolosa - wystruk@ukr.net
 *
 */

(function ($) {

    /* use strict mode */
    'use strict';

    /* variables */
    var scrollToTop;


    /**
     * Scroll
     */

    function scrollWindow() {
        $(window).scroll(function () {
            scrollToTop = $(window).scrollTop();
        });
    };


    /**
     * Click to Button
     * @param coordinate - coordinate top of "content"
     * @param time - time to animation
     */

//    function clickButton(element, coordinate, time) {
//        //check types
//        if (typeof coordinate !== 'number' || typeof time !== 'number') {
//            alert('ERROR \n\nUse number type for values \'coordinate\' and \'time\', please!')
//            return false;
//        }
//
//        //click to button
//        $(element).on('click', function () {
//            $('html,body').animate({
//                scrollTop: coordinate
//            }, time );
//        });
//    };

    /**
     * Fadeout and FadeIn Button
     */


    /**
     * BackToTop
     */

    $.fn.backToTop = function (options) {
        var methods = {
            position: 'static',
            scrollTop: scrollWindow(),
            clickBtn: function clickButton(element, coordinate, time) {
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
            }(this, 0, 400)
        };

        var opts = $.extend(methods, options);

//        return methods ({
//            clickBtn: methods.clickBtn
//        });
    };

}(jQuery));

