//rate
let NumRate = document.querySelectorAll('.ratevalue');
let arr_call_ratevalue = Array.from(NumRate);
arr_call_ratevalue.forEach(element => {
    $(".rateYo").rateYo({
        rating: element.value,
        starWidth: '12px',
        numStars: 5,
        minValue: 0,
        maxValue: 5,
        spacing: "3px",
        readOnly: true,
        normalFill: '#fff',
        ratedFill: '#feb808',
        
    })    
});


// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

var swiper = new Swiper('.swiper-container', {
  speed: 1000,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let cards = document.querySelectorAll('.swiper-slide .card');
let aa_cards = Array.from(cards);

swiper.on('transitionStart', function() {
  console.log('*** mySwiper.realIndex', swiper.realIndex);
  aa_cards.forEach(element => {
    element.classList.add('actions');
    setTimeout(() => {
      element.classList.remove('actions');
    }, 700);
  });
});


// let cpas = document.querySelectorAll('.swiper-pagination-bullet');
// let aa_cpas = Array.from(cpas);
// function action() {
 
//   aa_cards.forEach(element => {
//     element.classList.add('actions');
//     setTimeout(() => {
//       element.classList.remove('actions');
//     }, 700);
//   });
// }
// }
// let u = document.querySelector('#slider .parallax-bg').style.transform ;
// document.querySelector('#ds').value = u;
// document.querySelector('#ds2').value = ;

// setInterval(() => {
//   // u.addEventListener('change',()=>{
//     console.log(document.querySelector('#ds').value)
//   // })
// }, 0);
// aa_cards.forEach(element => {
//   if (element.classList.contains('swiper-slide-active')) {
//     element.classList.add('actions');
//     setTimeout(() => {
//       element.classList.remove('actions');
//     }, 700);
    
//   }
    
//   })
 
// });
// aa_cards.forEach(element => {
//   element.addEventListener('touchstart',()=>{
//     element.classList.add('actions');
//     setTimeout(() => {
//       element.classList.remove('actions');
//     }, 700);
//   })
 
// });

  

// document.querySelector('.swiper-button-prev').addEventListener('click',()=>{
//   action()
// })
// document.querySelector('.swiper-button-next').addEventListener('click',()=>{
//   action()
// })