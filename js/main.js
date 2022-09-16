// $('.owl-carousel').owlCarousel({
//     loop:true,
//     center: false,
//     margin:52,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             margin: 70,
//         },
//         400:{
//             items:1,
//             nav:true,
//             margin:0,
//         },
//         500:{
//             items:1,
//             nav:true,
//             margin:0,
//         },
//         600:{
//             items:1,
//             nav:true,
//             margin: 0,
//         },
//         700:{
//             items:1,
//             nav:true,
//             margin: 0,
//         },
//         1000:{
//             items:2.5,
//             nav:true,
//             margin:0,
//         },
//         1100:{
//             items:3,
//             nav:true,
//             margin:0,
//         },
//         1200:{
//             items:3,
//             nav: true,
//         },
//         1300:{
//             items: 3.5,
//             nav: true,
//         }
//     }
// })


var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 32,
  dots: false,
  loop: true,
  center: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      margin: 20,
    },
    600: {
      items: 1.5,
      nav: true,
      margin: 0,
    },
    1000: {
      items: 3.5,
      nav:true,
    }
  }
})