

// var galleryThumbs = new Swiper(".gallery-thumbs", {
//   centeredSlides: true,
//   centeredSlidesBounds: true,
//   slidesPerView: 3,
//   watchOverflow: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   direction: 'horizontal',
//   spaceBetween: 10,
//   navigation: {
//           nextEl: ".gallery-thumbs-next",
//           prevEl: ".gallery-thumbs-prev"
//   },
//     breakpoints: {
//   	// when window width is >= 480px
//   	992: {
//   		direction: 'vertical',
//       spaceBetween: 14,
//   	},
//   }
  
// });

// var galleryMain = new Swiper(".gallery-main",  {
//   watchOverflow: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   preventInteractionOnTransition: true,
//   slidesPerView: 1,

//   thumbs: {
//           swiper: galleryThumbs
//   },
//   navigation: {
//     nextEl: ".gallery-main-next",
//     prevEl: ".gallery-main-prev"
// },
//   // breakpoints: {
//   // 	// when window width is >= 480px
//   // 	992: {
//   // 		slidesPerView: 2.2,
//   // 		spaceBetween: 30
//   // 	},
//   // }
// });

// // galleryThumbs.controller.control =  galleryMain;
// galleryMain.controller.control =  galleryThumbs;
$('.product-card__slider').each(function () {
  var galleryThumbs;
  var galleryMain;
  var group = $(this);
  group.find('.gallery-thumbs').each(function () {
      var slider = $(this)
      galleryThumbs = new Swiper(slider[0], {
          centeredSlides: true,
          centeredSlidesBounds: true,
          slidesPerView: 3,
          watchOverflow: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          direction: 'horizontal',
          centeredSlides: false,
            centeredSlidesBounds: false,
          spaceBetween: 20,
          navigation: {
              nextEl: ".gallery-thumbs-next",
              prevEl: ".gallery-thumbs-prev"
          },
          breakpoints: {
              // when window width is >= 480px
              992: {
                  direction: 'vertical',
                  spaceBetween: 20,
              },
          }
      })
  });

  group.find('.gallery-main').each(function () {
      var slider = $(this)
      galleryMain = new Swiper(slider[0], {
          watchOverflow: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          preventInteractionOnTransition: true,
          slidesPerView: 1,
          thumbs: {
              swiper: galleryThumbs
          },
          navigation: {
              nextEl: ".gallery-main-next",
              prevEl: ".gallery-main-prev"
          },
          // breakpoints: {
          //     // when window width is >= 480px
          //     992: {
          //         slidesPerView: 2.2,
          //         spaceBetween: 30
          //     },
          // }
      })
    //   galleryMain.controller.control = galleryThumbs;
  });

//   galleryThumbs.controller.control = galleryMain;
  galleryMain.controller.control = galleryThumbs;
});

function modalMap() {
    event.preventDefault();
    $.fancybox.open({
      src: "#modal-map",
      type: "inline",
    //   slideClass: "myClass",
      baseClass: "modal-map__wrap",
    });
  }

  ymaps.ready(init);

  function init() {
    var map = new ymaps.Map("map", {
      center: [55.60804306913301,37.615973499999946], // ваши данные
      zoom: 15
    });
  
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }