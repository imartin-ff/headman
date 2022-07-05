
const anchors = document.querySelectorAll('.nav a')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    $('body, html').removeClass('menu-visible');
    $('#burger').removeClass('menu-visible');
  })
}



$('#burger').on('click', function(){
    $(this).toggleClass('opened');
    $('body, html').toggleClass('menu-visible')
})



const swiper = new Swiper('.gallery-swiper', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    wrapperClass: 'gallery-swiper-wrapper',
    slideClass: 'gallery-swiper-slide',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

    breakpoints:{
        0:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
        },
        540:{
            slidesPerView: 2, 
            slidesPerGroup: 2,
            spaceBetween: 0
        },

        991:{
            slidesPerView: 3, 
            slidesPerGroup: 3,
        },

        1200:{
            slidesPerView: 4, 
            slidesPerGroup: 4,
        }

        
    }

  })



  const reviewsSlider = new Swiper('.reviews__slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    wrapperClass: 'reviews__slider-wrapper',
    slideClass: 'reviews__slider-slide',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  })
  

if($('.step-btn.active').data('target') == 1){
    $('.form-buttons .prev').hide();
}

$('.form-step').hide();
$(`[data-step="${$('.step-btn.active').data('target')}"]`).show();
$('.form-aside .step-btn').on('click', function(e){
    e.preventDefault();
    let stepId = $(this).data('target');
    $('.step-btn').removeClass('active');
    $(this).addClass('active');

    $('.form-step').hide();
    $(`[data-step="${stepId}"]`).show();
})

$('.form-buttons .next').on('click', function(e){
    e.preventDefault();
    let stepId = $('.step-btn.active').data('target');
  
    if(stepId !==3 ){
        $('.form-buttons .prev').show();
        $('.form-step').hide();
        $('.step-btn').removeClass('active');
        $(`[data-step="${stepId + 1}"]`).show();
        
        $(`[data-target="${stepId + 1}"]`).addClass('active');
    }else{
        $('.success-popup').addClass('active');
    }
})


$('.form-buttons .prev').on('click', function(e){
    e.preventDefault();
    let stepId = $('.step-btn.active').data('target');
  
    if(stepId !==1 ){
        $('.form-step').hide();
        $('.step-btn').removeClass('active');
        $(`[data-step="${stepId - 1}"]`).show();
        
        $(`[data-target="${stepId - 1}"]`).addClass('active');
    }

    if(stepId == 2){
        $('.form-buttons .prev').hide();
    }
})



new Choices($('.select')[0], {
    searchEnabled: false,
    itemSelectText: ''
});

$('.select').each(function(index){
    new Choices($('.select')[index], {
        searchEnabled: false,
        itemSelectText: ''
    }); 
})


$('[data-tile]').on('click', function (e) {
    e.preventDefault();
    $(`[data-popup="${$(this).data('tile')}"]`).addClass('active');
    $('body, html').addClass('tiles-visible');
})

$('.close-popup').on('click', function () {
    $('.tiles-popup.active').removeClass('active');
    $('body, html').removeClass('tiles-visible');
})
$('.tiles-popup__overflow').on('click', function () {
    $('.tiles-popup.active').removeClass('active');
    $('body, html').removeClass('tiles-visible');
})

$('#date').datepicker();