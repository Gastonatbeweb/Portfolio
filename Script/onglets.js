$('document').ready(function () {

$("#onglet-1").click(function(){

$("#onglet_contain_2").css("display" , "flex");
$("#onglet_contain_3").css("display" , "none");
$("#onglet-1").css("opacity" , "1");
$("#onglet-2").css("opacity" , "0.5");

});

$("#onglet-2").click(function(){

$("#onglet_contain_2").css("display" , "none");
$("#onglet_contain_3").css("display" , "flex");
$("#onglet-2").css("opacity" , "1");
$("#onglet-1").css("opacity" , "0.5");

});

});
