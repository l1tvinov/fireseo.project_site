document.addEventListener('DOMContentLoaded', function () {

  let sections = $('section'),
    nav = $('.fast-link__nav');
    //nav_height = nav.outerHeight();
   let nav_height = 0;

  $(window).on('scroll', function () {
    $('.fast-link__link').removeClass('active');
    let cur_pos = $(this).scrollTop();
    sections.each(function () {
      let top = $(this).offset().top - nav_height - 180,
        bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
  nav.find('a').on('click', function () {
    let $el = $(this),
      id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 600);
    return false;
  });

  var jsTriggers = document.querySelectorAll('.included__list-item');
  //jsContents = document.querySelectorAll('.included__list-img');

jsTriggers.forEach(function(trigger) {
 trigger.addEventListener('mouseover', function() {
    var id = this.getAttribute('data-tab'),
        content = document.querySelector('.included__list-img[data-tab="'+id+'"]'),
        activeTrigger = document.querySelector('.included__list-item.active'),
        activeContent = document.querySelector('.included__list-img.active');

    activeTrigger.classList.remove('active'); 
    trigger.classList.add('active'); 
    
    activeContent.classList.remove('active'); 
    content.classList.add('active'); 
 });
});



  $(".tabs").each(function () {
    let tabs = $(this);
    let tabsControls = tabs.find('.tabs__control');
    let tabsContents = tabs.find('.tabs__content');
    let tabsHeaders = tabs.find('.stages-tabs__content-header');
    $(tabsContents).not(tabsContents[0]).css('display', 'none');
    $(tabsHeaders).css('display', 'none');
    $(tabsControls[0]).find('.stages-tabs__content-header').css('display', 'block')
    $(tabsControls[0]).addClass('active');
    $(tabsContents[0]).addClass('active');
    $(tabsControls).click(function (event) {
      event.preventDefault();
      tabsControls.removeClass('active');
      $(this).addClass('active');
      $(tabsHeaders).css('display', 'none');
      $(this).find('.stages-tabs__content-header').css('display', 'block')
      let index = $(this).index();
      tabsContents.css('display', 'none').removeClass('active');
      tabsContents.eq(index).fadeIn(400).addClass('active');
    });
  });

  $(document).ready(function () {
    let resultsOwl, 
    teamOwl;
    

    $(window).on('resize', function () {
      if ($(window).width() <= 767) {
        resultsOwl = $('.results-owl-carousel').owlCarousel({
          items: 1,
          nav: true,
          dots: false,
          loop: false,
          autoHeight: true,
          margin: 10,
          navText: [],
          navElement: 'button',
    
        });

        teamOwl = $('.team-owl-carousel').owlCarousel({
          items: 1,
          nav: true,
          dots: false,
          loop: false,
          autoHeight: true,
          navText: [],
          navElement: 'button',
    
        });

        $('.results-owl-carousel').addClass('owl-carousel');
        $('.team-owl-carousel').addClass('owl-carousel');
        
      } else {
        resultsOwl.trigger('destroy.owl.carousel');
        teamOwl.trigger('destroy.owl.carousel');
        $('.results-owl-carousel').removeClass('owl-carousel');
        $('.team-owl-carousel').removeClass('owl-carousel');
      }
    }).trigger('resize');
  });



  $('.keys-owl-carousel').owlCarousel({
    //center: true,
    items: 1,
    nav: true,
    dots: false,
    loop: false,
    margin: 10,
    navText: [],
    navElement: 'button',
    responsive: {
      768: {
        items: 3,
      }
    }
  })

  $('.review-owl-carousel').owlCarousel({
    //center: true,
    items: 1,
    nav: true,
    dots: false,
    loop: false,
    margin: 30,
    //autoHeight: true,
    navText: [],
    navElement: 'button',
    responsive: {
      768: {
        items: 2,
      }
    }
  });


  const arSVG = document.querySelectorAll('#animate-vivus-svg object');

  function animationVivusSVG(arElement) {

    arElement.forEach((element, index) => {
      let vivusID = element.id = 'svg-' + index;
      let vivusItem = new Vivus(vivusID, {
        type: 'sync',
        duration: 500,
        delay: 100,
      });
    });

  }

  animationVivusSVG(arSVG);


  document.querySelectorAll('.block-title').forEach((element) => {
    element.dataset.aos = "fade-up";
    element.dataset.aosOffset = "100";
  });

  document.querySelectorAll('.team__item').forEach((element, index) => {
    element.dataset.aos = "fade-up";
    element.dataset.aosOffset = "150";
    //element.dataset.aosDuration = "1500";
    element.dataset.aosDelay = index * 200;
  });

  document.querySelectorAll('.result').forEach((element, index) => {
    element.dataset.aos = "fade-up";
    element.dataset.aosOffset = "150";
    element.dataset.aosDelay = index * 100;
  });

  document.querySelectorAll('.price__list-item').forEach((element, index) => {
    element.dataset.aos = "fade-left";
    //element.dataset.aosDuration = "800";
    element.dataset.aosDelay = index * 100;
  });

  document.querySelectorAll('.stages-tabs__content-half li').forEach((element, index) => {
    element.dataset.aos = "fade-left";
    //element.dataset.aosDuration = "800";
    element.dataset.aosDelay = index * 100;
  });

  document.querySelectorAll('.compare__item').forEach((element, index) => {
    element.dataset.aos = "flip-right";
    element.dataset.aosOffset = "200";
    //element.dataset.aosDuration = "1200";
    element.dataset.aosDelay = index * 200;
  });

  document.querySelectorAll('.compate__content-list-item').forEach((element, index) => {
    element.dataset.aos = "fade-left";
    //element.dataset.aosDuration = "800";
    element.dataset.aosDelay = index * 100;
  });

  AOS.init();


})