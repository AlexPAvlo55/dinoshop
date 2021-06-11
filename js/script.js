$(document).ready(function() {

    // $( "#slider" ).slider({
    //   range: true,
    //             min : 5500,
    //             max : 38000,
    //             values: [ 5500, 38000 ],
    //             create: function( event, ui ) {
    //                 val = $( "#slider" ).slider("value");
    //                 $( "#contentSlider" ).html( val );
    //             },
    //         stop: function(event, ui) {
    //          jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    //          jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    //          },
    //          slide: function(event, ui){
    //              jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    //              jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    //          }
    //     });

    $('input, select').styler();

    $(".slider .owl-carousel").owlCarousel({
        items: 1,
        nav : true,
        navText: ['',''],
        pagination : true,
        loop:true,
        paginationNumbers: false
    });
    $(".tov_img_slider .owl-carousel").owlCarousel({
        items: 5,
        nav : true,
        dots : false,
        navText: ['',''],
        paginationNumbers: false,
        responsive:{ 
                    320:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:8
                    },
                    1280:{
                        items:5
                    }
                }
    });
    $(".similar .owl-carousel").owlCarousel({
        items: 6,
        nav : true,
        dots : false,
        navText: ['',''],
        paginationNumbers: false,
        responsive:{ 
                    320:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:4
                    },
                    1280:{
                        items:6
                    }
                }
    });
    $(".you_see .owl-carousel").owlCarousel({
        items: 5,
        nav : true,
        dots : false,
        navText: ['',''],
        paginationNumbers: false,
        responsive:{ 
                    320:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:4
                    },
                    1280:{
                        items:5
                    }
                }
    });
    $(".tab_slider .owl-carousel").owlCarousel({
        items: 4,
        nav : true,
        navText: ['',''],
        pagination : true,
        loop:true,
        paginationNumbers: false,
        responsive:{ 
                    320:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1280:{
                        items:4
                    }
                }
    });
    $(".brand_slider .owl-carousel").owlCarousel({
        items: 10,
        nav : true,
        navText: ['',''],
        dots : false,
        loop:true,
        paginationNumbers: false,
        responsive:{ 
                    320:{
                        items:1
                    },
                    480:{
                        items:3
                    },
                    768:{
                        items:6
                    },
                    992:{
                        items:10
                    },
                    1280:{
                        items:10
                    }
                }
    });
    $('div.section').elitTabs({
        'useCookie': false,
        'useHashLink': false,
        'adaptiveMode': false
    });
     $(".o_nas .right .arr_top").click(function() {
        $(this).removeClass("active");
        $(".o_nas").addClass("active");
        $(".o_nas .right .arr_bottom").addClass("active");
    });
     $(".o_nas .right .arr_bottom").click(function() {
        $(this).removeClass("active");
        $(".o_nas").removeClass("active");
        $(".o_nas .right .arr_top").addClass("active");
    });
     $(".mob_menu").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
     $(".user_ico").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
     $(".mob_menu").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
     $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });
    $('.humb').click(function(){
        $(this).next().slideToggle();
    });
    $(".filter_block_plus .item_click").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
     $(".return_form .arrow").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    $(".return_form .arrow img").bind("click", function() {
          var src = ($(this).attr("src") === "img/arr_buttom.png")
                        ? "img/arr_top.png" 
                        : "img/arr_buttom.png";
          $(this).attr("src", src);
    });
    $(".costing ul li .top_li").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });


    $(".fancybox_popup").fancybox({ 
        margin:0,
        padding:[0, 0, 0, 0],
        margin    : [0, 0, 0, 0],
        locked:false,
        tpl: {
                closeBtn : '<a title="{{CLOSE}}" class="close_button close_button_top" href="javascript:;"><img src="img/close.png"></a>'
            }
    });


});
