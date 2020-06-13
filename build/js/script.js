
$(document).ready(function(){
    $(".circle").circularProgress({
        color: "#8583e1",
        line_width: 1,
        height: "265px",
        width: "265px",
        background: "red",
        percent: 0,
        starting_position: 0,
        
    }).circularProgress('animate', 20, 2500);
});
$(".circle2").circularProgress({
    color: "#25ffe4",
    line_width: 6,
    height: "265px",
    width: "265px",
    percent: 0,

    // counter_clockwise: true,
    starting_position: 0
}).circularProgress('animate', 100, 2000);
$(".circle3").circularProgress({
    color: "#25ffe4",
    line_width: 6,
    height: "265px",
    width: "265px",
    percent: 0,

    // counter_clockwise: true,
    starting_position: 0
}).circularProgress('animate', 100, 2000);
$(".circle4").circularProgress({
    color: "#25ffe4",
    line_width: 6,
    height: "265px",
    width: "265px",
    percent: 0,

    // counter_clockwise: true,
    starting_position: 0
}).circularProgress('animate', 100, 2000);

new SimpleBar(document.getElementById('myEl'),{
    scrollbarMinSize: 50,
    autoHide: true 
    
});
new SimpleBar(document.getElementById('myEl1'),{
   
    scrollbarMaxSize: 50,
    autoHide: true 
});


$(".menu li ul").hide(); // скрываем выпадающее меню
$(".menu li:has('.hover')").hover(
  function(){
  $(".menu li ul").stop().fadeToggle(300);} /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
);
$(function() {
    $('progress').each(function() {
      var max = $(this).val();
      $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
              });
  });