var opaque = false ;/*Booléen sur l'opacité des éléments
                     false = visible et true = invisible  */

anim_effac = function()/*Fonction qui met l'opacité des éléments de niveaux
de connaissances à 0 pour que l'animation d'affichage puissent se relancer la prochaine fois*/
{
if(!opaque)//Si les éléments sont visibles , on peux les faires disparaîtres//
{
/*  Stop les animations , comme ça , si elles ne sont pas finis ,
 elles peuvent repartir de zéro à la prochaine utilisation   */
  $('#html .un:nth-child(2)').stop();
  $('#html .un:nth-child(3)').stop();
  $('#html .un:nth-child(4)').stop();
  $('#html .un:nth-child(5)').stop();

  $('#css .un:nth-child(2)').stop();
  $('#css .un:nth-child(3)').stop();
  $('#css .un:nth-child(4)').stop();
  $('#css .un:nth-child(5)').stop();

  $('#js .un:nth-child(2)').stop();
  $('#js .un:nth-child(3)').stop();
  $('#js .un:nth-child(4)').stop();

/////////////////////////////////////////////////////////////

  $('#html .un:nth-child(2)').css('opacity' , '0');
  $('#html .un:nth-child(3)').css('opacity' , '0');
  $('#html .un:nth-child(4)').css('opacity' , '0');
  $('#html .un:nth-child(5)').css('opacity' , '0');

  $('#css .un:nth-child(2)').css('opacity' , '0');
  $('#css .un:nth-child(3)').css('opacity' , '0');
  $('#css .un:nth-child(4)').css('opacity' , '0');
  $('#css .un:nth-child(5)').css('opacity' , '0');

  $('#js .un:nth-child(2)').css('opacity' , '0');
  $('#js .un:nth-child(3)').css('opacity' , '0');
  $('#js .un:nth-child(4)').css('opacity' , '0');

}
opaque = true ;//Indique que les éléments sont invisibles//
}
anim_affich = function()
{
   if(opaque)//Si les élements sont invisibles on peux les afficher//
   {

     $('#html .un:nth-child(2)').animate({opacity : '1'} , 500 , function(){
     $('#html .un:nth-child(3)').animate({opacity : '1'} , 500 , function(){
     $('#html .un:nth-child(4)').animate({opacity : '1'} , 500 , function(){
     $('#html .un:nth-child(5)').animate({opacity : '1'} , 500 , function(){

     });
     });
     });
     });

     $('#css .un:nth-child(2)').animate({opacity : '1'} , 500 , function(){
     $('#css .un:nth-child(3)').animate({opacity : '1'} , 500 , function(){
     $('#css .un:nth-child(4)').animate({opacity : '1'} , 500 , function(){
     $('#css .un:nth-child(5)').animate({opacity : '1'} , 500 , function(){

     });
     });
     });
     });

     $('#js .un:nth-child(2)').animate({opacity : '1'} , 750 , function(){
     $('#js .un:nth-child(3)').animate({opacity : '1'} , 750 , function(){
     $('#js .un:nth-child(4)').animate({opacity : '1'} , 750 , function(){

     });
     });
     });
   }
   opaque = false ;//Indique que les éléments sont visibles//
}
choisir_ancre = function(choix)/*Fonction qui met en blanc le bon lien en fonction
                                     de la section ou se situe l'utilisateur*/
{

  if(choix == 1)
  {
    $("#intro_list").css('list-style-type' , 'inherit');

    $("#form_list").css('color' , 'white');
    $("#form_list").css('list-style-type' , 'circle');
    $("#connais_list").css('color' , 'white');
    $("#connais_list").css('list-style-type' , 'circle');
    $("#proj_list").css('color' , 'white');
    $("#proj_list").css('list-style-type' , 'circle');
    $("#accueil_list").css('color' , 'white');
    $("#accueil_list").css('list-style-type' , 'circle');
  }
  else if (choix == 2)
  {
    $("#form_list").css('list-style-type' , 'inherit');

    $("#intro_list").css('color' , 'white');
    $("#intro_list").css('list-style-type' , 'circle');
    $("#connais_list").css('color' , 'white');
    $("#connais_list").css('list-style-type' , 'circle');
    $("#proj_list").css('color' , 'white');
    $("#proj_list").css('list-style-type' , 'circle');
    $("#accueil_list").css('color' , 'white');
    $("#accueil_list").css('list-style-type' , 'circle');

    anim_effac();//Si on sort de la section connaissance , on lance l'animation d'effacement//
  }
  else if (choix == 3)
  {
    $("#connais_list").css('list-style-type' , 'inherit');

    $("#intro_list").css('color' , 'white');
    $("#intro_list").css('list-style-type' , 'circle');
    $("#form_list").css('color' , 'white');
    $("#form_list").css('list-style-type' , 'circle');
    $("#proj_list").css('color' , 'white');
    $("#proj_list").css('list-style-type' , 'circle');
    $("#accueil_list").css('color' , 'white');
    $("#accueil_list").css('list-style-type' , 'circle');

    anim_affich();//Si on est dans la section connaissance , on lance l'animation d'affichage//
  }
  else if (choix == 4)
  {
    $("#proj_list").css('list-style-type' , 'inherit');

    $("#intro_list").css('color' , 'white');
    $("#intro_list").css('list-style-type' , 'circle');
    $("#form_list").css('color' , 'white');
    $("#form_list").css('list-style-type' , 'circle');
    $("#connais_list").css('color' , 'white');
    $("#connais_list").css('list-style-type' , 'circle');
    $("#accueil_list").css('color' , 'white');
    $("#accueil_list").css('list-style-type' , 'circle');
  }
  else if (choix == 5)
  {
    $("#accueil_list").css('list-style-type' , 'inherit');

    $("#proj_list").css('color' , 'white');
    $("#proj_list").css('list-style-type' , 'circle');
    $("#intro_list").css('color' , 'white');
    $("#intro_list").css('list-style-type' , 'circle');
    $("#form_list").css('color' , 'white');
    $("#form_list").css('list-style-type' , 'circle');
    $("#connais_list").css('color' , 'white');
    $("#connais_list").css('list-style-type' , 'circle');
  }
}

init = function(tab , sect)//Fonction qui renplit un tableau avec la position des sections //
//La position sert à détecter quand animer//
{
   var tab = new Array([
  (($(sect[0]).offset().top + $(sect[0]).height())/2.5) ,
  (($(sect[1]).offset().top + $(sect[1]).height())/1.5) ,
  (($(sect[2]).offset().top + $(sect[2]).height())/1.6),
  (($(sect[3]).offset().top + $(sect[3]).height())/1.5)] ,
  [false , false , false , false]);//Booléens qui permettent de tester si les sections sont cachés ou non//
  return tab ;
}

var tab = Array();
var sect = $('div section');
tab = init(tab , sect);

animation = function(section_selec , index , choix)//Fonction qui anime les séctions//
{
  if(choix == 1)//Si l'on veut voir apparaître la section//
  {
     if(!tab[1][index])//On vérifie si la section n'est pas déja aparente//
     {
       tab[1][index] = true ;

       section_selec.animate({left : '0'} , 600 , "easeOutBack" , function (){//Animation//

       });
     }
  }
  else if(choix == 2)//Si l'on veut voir disparaître la section//
  {
    if(tab[1][index])//On vérifie si la section n'est pas déja caché//
    {
      tab[1][index] = false ;

      section_selec.animate({left : '1200'} , 600 , "easeInOutCirc" , function (){//Animation//

      });
    }
  }
}
$('document').ready(function () { //Quand JQuery est prêt//
   //   Initialisation des sections à 1200px de la gauche(caché de l'utilisateur)   //
   $('#intro').css('left' , '1200px');
   $('#form').css('left' , '1200px');
   $('#connais').css('left' , '1200px');
   $('#proj').css('left' , '1200px');

//On colorie les div de la section connaissances en fonction du language//
//On met l'opacité à 0 de base//
   $('#html .un:nth-child(2)').css('backgroundColor' , 'red');
   $('#html .un:nth-child(3)').css('backgroundColor' , 'red');
   $('#html .un:nth-child(4)').css('backgroundColor' , 'red');
   $('#html .un:nth-child(5)').css('backgroundColor' , 'red');

   $('#css .un:nth-child(2)').css('backgroundColor' , 'blue');
   $('#css .un:nth-child(3)').css('backgroundColor' , 'blue');
   $('#css .un:nth-child(4)').css('backgroundColor' , 'blue');
   $('#css .un:nth-child(5)').css('backgroundColor' , 'blue');

   $('#js .un:nth-child(2)').css('backgroundColor' , 'yellow');
   $('#js .un:nth-child(3)').css('backgroundColor' , 'yellow');
   $('#js .un:nth-child(4)').css('backgroundColor' , 'yellow');

   $('#html .un:nth-child(2)').css('opacity' , '0');
   $('#html .un:nth-child(3)').css('opacity' , '0');
   $('#html .un:nth-child(4)').css('opacity' , '0');
   $('#html .un:nth-child(5)').css('opacity' , '0');

   $('#css .un:nth-child(2)').css('opacity' , '0');
   $('#css .un:nth-child(3)').css('opacity' , '0');
   $('#css .un:nth-child(4)').css('opacity' , '0');
   $('#css .un:nth-child(5)').css('opacity' , '0');

   $('#js .un:nth-child(2)').css('opacity' , '0');
   $('#js .un:nth-child(3)').css('opacity' , '0');
   $('#js .un:nth-child(4)').css('opacity' , '0');

$(window).scroll(function(){ //Quand on scroll//
//Teste chacune des sections selon le scroll//

  if($(window).scrollTop() < tab[0][0])
  {
     choisir_ancre(5);
  }
  if($(window).scrollTop() > tab[0][0] && $(window).scrollTop() < tab[0][1])
  {
     choisir_ancre(1);
     animation($(sect[0]) , 0 , 1);
  }
  if ($(window).scrollTop() < tab[0][0])
  {
    animation($(sect[0]) , 0 , 2);
  }
  if($(window).scrollTop() > tab[0][1] && $(window).scrollTop() < tab[0][2])
  {
    choisir_ancre(2);
    animation($(sect[1]) , 1 , 1);
  }
  if ($(window).scrollTop() < tab[0][1])
  {
    animation($(sect[1]) , 1 , 2);
  }
  if($(window).scrollTop() > tab[0][2] && $(window).scrollTop() < tab[0][3])
  {
    choisir_ancre(3);
    animation($(sect[2]) , 2 , 1);
  }
  if($(window).scrollTop() < tab[0][2])
  {
    animation($(sect[2]) , 2 , 2);
  }
  if($(window).scrollTop() > tab[0][3])
  {
    choisir_ancre(4);
    animation($(sect[3]) , 3 , 1);
  }
  if($(window).scrollTop() < tab[0][3])
  {
    animation($(sect[3]) , 3 , 2);
  }
   });
});
