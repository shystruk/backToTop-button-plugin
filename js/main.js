jQuery(function($) {
    $('#back').backToTop({
        coordinate: 0,
//        takeElement: '.js-finish-scroll', you may select element, but you should delete coordinate property
        timeSpeed: 500,
        footer: true,
        showBtn: 50,
        right: '15px',
        bottom: '10px'
    });
});
