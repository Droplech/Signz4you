$(document).ready(function(){
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });


    $('.burger_button').click(function(){
        if ( !$('.burger_button').hasClass('active') ) {
            $('.burger_button').addClass('active')
            $('.burger_content').fadeIn()
            $('html').css("overflow","hidden")
        }else{
            $('.burger_button').removeClass('active')
            $('.burger_content').fadeOut()
            $('html').css("overflow","auto")
        }
        
    })






    let rand = [0,1,2,3];
    

    function fun() { 
        
        $('.head_bg_item').removeClass('head_bg_item-active');
        let randNum = rand[Math.floor(Math.random() * rand.length)];
        
        $('.head_bg_item').eq(randNum).addClass('head_bg_item-active');
   

    } 
    
    fun();

    new Swiper ('.slider_container_txt',{
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '#txt_pag',
        },
        
    })




   

























})
