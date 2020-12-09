"use strict";

if (document.querySelector('.slider_pro')) {
  var imgB = document.querySelector('.big-img img'),
      imgA = document.querySelector('.big-img .gl'),
      smallerI = document.querySelectorAll('.smaller img'),
      arr = Array.from(smallerI),
      smallerAAA = document.querySelectorAll('.smaller a'),
      arr_AAA = Array.from(smallerAAA),
      counter = 0;
  arr.forEach(function (a) {
    a.addEventListener('click', function (e) {
      imgB.src = e.target.src;
      imgA.href = e.target.src;
    });
  });
  document.querySelector('.Next').addEventListener('click', function () {
    counter++;

    if (counter === arr.length) {
      counter = 0;
    }

    imgB.src = arr[counter].src;
  });
  document.querySelector('.pre').addEventListener('click', function () {
    if (counter > 0) {
      counter--;
      imgB.src = arr[counter].src;
    }

    if (counter === 0) {
      counter = arr.length;
      imgB.src = arr[counter].src;
    }
  });
  imgB.addEventListener('click', function () {
    arr_AAA.forEach(function (element) {
      element.href = element.childNodes[0].src;
      element.setAttribute('data-lightbox', "roadtrip");
    });
  });
  setInterval(function () {
    // console.log(document.querySelector("#lightboxOverlay"))
    if (document.querySelector("#lightboxOverlay").style.display == "none") {
      arr_AAA.forEach(function (element) {
        element.href = '#';
        element.removeAttribute('data-lightbox');
      });
    }
  }, 0);
}