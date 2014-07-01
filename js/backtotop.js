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
            footerCoordinates,
            scrollToTop,
            scrollHeight,
            windowHeight,
            correctlyHeight,
            toElement,
            methods;

        methods = $.extend({

            //values for .scrollTop() method
            coordinate: 0,
            time: 400,

            //cancel footer height
            footer: true,

            //height when button will show
            showBtn: 0,

            //take element from DOM ( scroll stop on top this element )
            takeElement: '',

            //css style
            left: 'auto',
            right: 'auto',
            bottom: 'auto'
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

                    //check element top coordinate
                    toElement = methods.coordinate >= 0 ? methods.coordinate : $(methods.takeElement).offset().top;

                    $('html,body').animate({
                        scrollTop: toElement
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
                    scrollHeight = methods.showBtn > 0 ? methods.showBtn : $(window).height();

                    if (scrollToTop >= scrollHeight) {
                        $(element).fadeIn('slow');
                    } else if (scrollToTop <= scrollHeight){
                        $(element).fadeOut('slow');
                    }

                    footerCoordinates = footer.offset().top;

                    //calculate correct "Height" for button position relative to footer
                    correctlyHeight = windowHeight - scrollHeight;

                    //check footer and add correct position for btn
                    if ( methods.footer == true && scrollToTop >= footerCoordinates - scrollHeight - correctlyHeight ) {
                        $(element).addClass('sticky').css({ top: footerCoordinates - 25 }); // '25' is a button height with space
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
