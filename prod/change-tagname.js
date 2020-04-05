var screenWidth  = window.innerWidth || document.documentElement.clientWidth; 
document.body.clientWidth;
var height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
var mobileWidth = 320;
var tabletWidth = 770;
var headlines = document.querySelectorAll(".header-menu-item");
var arrayHeadlines = Array.from(headlines);






var closeMenuTextContent = function () {
    if (screenWidth >= mobileWidth && screenWidth < tabletWidth) {
arrayHeadlines.forEach((it) => {
        console.log('дал новый');
     console.log(screenWidth)
    it.innerHTML = "123";

})}

  else if (screenWidth > tabletWidth) {
   for (let i = 0; i < 3; i++) {
     arrayHeadlines[i].innerHTML = headlines[i].innerHTML
   };
      console.log('вернул старый')
      console.log(screenWidth)
     };
 };
//window.addEventListener("resize",closeMenuTextContent());
//window.addEventListener("load",  closeMenuTextContent());












(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

       // The actualResizeHandler will execute at a rate of 15fps
       }, 1000);
    }
  }

  function actualResizeHandler() {
    closeMenuTextContent()
  }

}());