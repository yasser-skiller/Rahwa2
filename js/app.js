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
function action() {
 
  aa_cards.forEach(element => {
    element.classList.add('actions');
    setTimeout(() => {
      element.classList.remove('actions');
    }, 500);
  });

}

document.querySelector('.swiper-button-prev').addEventListener('click',()=>{
  action()
})
document.querySelector('.swiper-button-next').addEventListener('click',()=>{
  action()
})