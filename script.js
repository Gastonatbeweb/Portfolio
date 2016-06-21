

init = function(tab , sect)
{

   var tab = new Array([($(sect[0]).offset().top + $(sect[0]).height())/3 ,
  ($(sect[1]).offset().top + $(sect[1]).height())/3 ,
  ($(sect[2]).offset().top + $(sect[2]).height())/3 ,
  ($(sect[3]).offset().top + $(sect[3]).height())/3] ,
  [false , false , false , false]);
  return tab ;
}

var tab = Array();
var sect = $('div section');
var anim_en_cours = false ;
var anim_en_cours_bis = false ;
tab = init(tab , sect);

animation = function(section_selec , choix , index)//Fonction qui amène les séctions au millieu de la page//
{
      if(!anim_en_cours)
      {

        if(choix == 0 && !tab[1][index])
        {
          anim_en_cours = true ;
          tab[1][index] = true ;

          section_selec.animate({left : '0'} , 500 , function test(){
             anim_en_cours = false ;


          });


        }

      }
      if(!anim_en_cours_bis)
      {

        if(choix == 1 && tab[1][index])
        {
          anim_en_cours_bis = true ;
          tab[1][index] = false ;

          section_selec.animate({left : '1200'} , 500  , function teste(){
             anim_en_cours_bis = false ;


          });


        }

     }

}

$('document').ready(function () {



   //    Initialisation des séction à 1200px de la gauche(caché de l'utilisateur)    //
   $('#intro').css('left' , '1200px');
   $('#form').css('left' , '1200px');
   $('#connais').css('left' , '0px');
   $('#proj').css('left' , '0px');

console.log(tab[0][0]);
console.log(tab[0][2]);

$(window).scroll(function(){


if($(window).scrollTop() > tab[0][0] && $(window).scrollTop() < tab[0][1])
{
   animation($(sect[0]) , 0 , 0);
}
else if ($(window).scrollTop() < tab[0][0])
{
   animation($(sect[0]) , 1 , 0);
}
else if($(window).scrollTop() > tab[0][1] && $(window).scrollTop() < tab[0][2])
{

    animation($(sect[1]) , 0 , 1);
}
else if($(window).scrollTop() < tab[0][1] && $(window).scrollTop() > tab[0][0])
{
    console.log('test');
}


console.log($(window).scrollTop());


   });


});
