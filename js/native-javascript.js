/*
 * Back To Top - Native(Raw) JavaScript
 * version: 1.0.0 (Sunday, July 11 2014)
 *
 * License: MIT
 *
 * Copyright 2014 Vasyl Stokolosa - wystruk@ukr.net
 *
 */

(function () {

    //variables
    var scrollHeight = 400, //edit what you want Eg. 50,250...
        checkFototer = true, // true/false
        speed = 35, //edit what you want Eg. 40,45...
        position = {
            left: 'auto',  //edit what you want
            right: '15px', //edit what you want
            bottom: '10px' //edit what you want
        },
        scroll,
        footerHeight,
        button = document.querySelector('#back'),
        footer = document.querySelector('#js-footer'),
        footerCoordinates = footer.offsetTop,
        windowHeight = Math.max(window.innerHeight),
        correctlyHeight = windowHeight - scrollHeight;

    //show button
    var showButton = function () {

        //check footer location
        footerHeight = checkFototer == true ? footerCoordinates : null;

        window.onscroll = function () {

            //how much we scroll
            scroll = window.pageYOffset || document.documentElement.scrollTop;

            if (scroll >= scrollHeight) {
                button.style.display = 'block';
                button.style.left = position.left;
                button.style.right = position.right;
                button.style.bottom = position.bottom;
            } else {
                button.style.display = 'none';
            }


            if (checkFototer == true && scroll >= footerHeight - correctlyHeight - scrollHeight) {
                button.className = button.className.replace(' sticky', '');
                button.className += ' sticky';
                button.style.top = footerHeight - 25 + 'px';
            }
            else {
                button.className = button.className.replace(' sticky', '');
                button.style.top = '';
            }
        };
    };

    var clickButton = function () {
        button.onclick = function () {
            var height = window.pageYOffset || document.documentElement.scrollTop,
                ypos = height;

            function scrollTo () {
                ypos -= speed;
                window.scrollTo(0,ypos);

                if (ypos <= 0) {
                    clearInterval(timer);
                }
            }

            var timer = setInterval(scrollTo, 1);

        }
    };

    //call functions
    showButton();
    clickButton();

})();