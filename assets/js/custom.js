$(document).ready(()=>{

    // back to top
    $(window).on('scroll',(e)=>{
        let scrollTop = $(this).scrollTop();
        if(scrollTop > 150){
            $('.back-to-top').addClass('active');
        }else{
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').on('click', ()=>{
        $('html , body').animate({
            scrollTop: 0,
        })
    });

    // smle namue bar 
    $('.mobile-icon').on('click',()=>{
        $('.manue-list').addClass('active');
        $('.page-overly').addClass('active');
    })
    $('.page-overly').on('click',()=>{
        $('.manue-list').removeClass('active');
        $('.page-overly').removeClass('active');
    })


    // search ber 
    $('.main-manue-content .manue-search i').on('click',()=>{
        $('.main-manue-content .manue-search .search-area').addClass('active');
    });

    $('.main-manue-content .manue-search .search-area .overly').on('click',()=>{
        $('.main-manue-content .manue-search .search-area').removeClass('active');
    })

    // slider section
    $('.banner-slider').slick({
        dots: false,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-left-long"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-right-long"></i></button>',
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                arrows: false,
              }
            }
          ],
    });
});

