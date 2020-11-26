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
if(document.querySelector('.swiper-container')){
  var swiper = new Swiper('.swiper-container', {
    speed: 900,
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
let x = swiper.realIndex;

swiper.on('transitionStart', function() {
  console.log('all',x, swiper.realIndex);
  if(swiper.realIndex > x){
    aa_cards.forEach(element => {
      element.classList.add('actions');
      setTimeout(() => {
        element.classList.remove('actions');
      }, 700);
    });
    x = swiper.realIndex;
    console.log('case',x, swiper.realIndex);

  }
  if(swiper.realIndex < x){
    aa_cards.forEach(element => {
      element.classList.add('REactions');
      setTimeout(() => {
        element.classList.remove('REactions');
      }, 700);
    });
    x = swiper.realIndex;
    console.log( 'sorry',x, swiper.realIndex);

  }
  
});

}



if(document.querySelector('.slider_pro')){
   
  let imgB = document.querySelector('.big-img img'),
  imgA = document.querySelector('.big-img .gl'),
  smallerI = document.querySelectorAll('.slider_pro .smaller img'),
  arr = Array.from(smallerI),
  smallerAAA = document.querySelectorAll('.slider_pro .smaller a'),
  arr_AAA = Array.from(smallerAAA),
  counter = 0;

  arr.forEach(a =>{
    a.addEventListener('click',(e) =>{
      imgB.src = e.target.src
      imgA.href = e.target.src
    })
  })
}