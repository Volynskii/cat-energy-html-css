var width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
var height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
var tabletWidth = 660;

// var for favorite__oc
var wrapperFO = document.querySelector('.favorite-oc__wrapper');
var fieldsetFO = document.createElement('fieldset');
// var for favorite__oc

var wrapperPAE = document.querySelector('.phone-and-email__wrapper__list');
var fieldsetPAE = document.createElement('fieldset');
var legendPAE = document.createElement('legend');
legendPAE.classList.add('phone-and-email__wrapper__list__legend');
legendPAE.textContent = 'КОНТАКТНАЯ ИНФОРМАЦИЯ';

// var for favorite__oc
console.log(fieldsetPAE.innerHTML)

var changeTagnameWrapperFo = function() {
      if (width >= tabletWidth) {
fieldsetFO.innerHTML = wrapperFO.innerHTML;
fieldsetFO.classList.add('favorite-oc__wrapper__fieldset');
wrapperFO.parentNode.replaceChild(fieldsetFO, wrapperFO);
    }
};
var changeTagnameWrapperPAE = function() {
      if (width >= tabletWidth) {
fieldsetPAE.innerHTML = wrapperPAE.innerHTML;
fieldsetPAE.classList.add('phone-and-email__wrapper__fieldset');
wrapperPAE.parentNode.replaceChild(fieldsetPAE, wrapperPAE);
fieldsetPAE.appendChild(legendPAE);
    }
};




changeTagnameWrapperFo();
changeTagnameWrapperPAE();

