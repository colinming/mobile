$(function(){

    $('.top_menu_list a').tap(function(){
        $(this).addClass('active').siblings().removeClass('active');
    
        var index = $(this).index();

        $('#container>section').eq(index).show().siblings().hide();

        $(window).scrollTop(0);

    });

    $('#container>section').swipeLeft(function(){
        var index = $(this).index();
        $(this).next().show().siblings().hide('fast');
        $('.top_menu_list a').eq(index).next().addClass('active').siblings().removeClass('active');

    })

     $('#container>section').swipeRight(function(){
        var index = $(this).index();
        $(this).prev().show().siblings().hide('fast');
        $('.top_menu_list a').eq(index).prev().addClass('active').siblings().removeClass('active');

    })

})