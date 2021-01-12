$(document).ready(function() {
  $("#gorilla").hide();
  $("#lion").hide();
  $("#sloth").hide();

  
  $("#div1").click(function(){
    $(".beginning").toggle();
    $("#gorilla").toggle();
  });

  $("#div2").click(function(){
    $(".beginning").toggle();
    $("#sloth").toggle();
  });

  $("#div3").click(function(){
    $(".beginning").toggle();
    $("#lion").toggle();
  });

  $("#hiddenP1").click(function() {
    $("#gorilla").toggle();
    $(".beginning").toggle();
  });

  $("#hiddenP2").click(function() {
    $("#sloth").toggle();
    $(".beginning").toggle();
  });

  $("#hiddenP3").click(function() {
    $("#lion").toggle();
    $(".beginning").toggle();
  });


});