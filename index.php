<!Doctype html>
   <html lang="fr">    <!-- Langue : Français -->
      <head>

         <title> Mon Cv Perso </title>  <!-- Titre de la page -->
		     <meta charset="utf-8"/>
		     <link rel = "stylesheet"  href = "Css/main.css">
         <link rel = "stylesheet"  href = "Css/zoom_img.css">

      </head>

      <body>

           <header id = "accueil">   <!-- En tête de la page -->

             <img src = "./Images/logo.png" id = "logo"></img>
             <img src = "./Images/test.jpeg" id = "fond" ></img>

	         </header>
           <nav id = "navi">

              <ul>
                   <a href = "#accueil"><li id = "accueil_list" title="Accueil"></li></a>
                   <a href = "#intro"><li id = "intro_list" title="Introduction"></li></a>
                   <a href = "#form"><li id = "form_list" title="Formations"></li></a>
                   <a href = "#connais"><li id = "connais_list" title="Connaissances"></li></a>
                   <a href = "#proj"><li id = "proj_list" title="Projets"></li></a>

              </ul>

           </nav>
            <div id = "conteneur">

           <section id = "intro"> <!--Introduction-->

                 <p>
                    Bienvenue sur mon site Web !
                    Je m'appelle Gaston Saboy et je suis né le 13 juin 1999 à Montpellier.
                    Je suis passionné d'informatique depuis pas mal de temps , et c'est pour cela que j'ai décidé
                    de me lancer dans le développement.J'ai donc décider d'intégrer une formation
                    qui me permet , entre autres de développer des sites ainsi que des services web.
                 </p>

           </section>

           <section id = "form"><!--Formations & connaissances-->

                 <h1>Formations</h1>
                 <p>
                   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                   totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                   Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                 </p>
            </section>
            <section id = "connais">

                <h1>Connaissances</h1>

                  <div id = "html">
                   <img src = "./Images/html5.png"></img>
                   <div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div>
                 </div>
                 <div id = "css">
                   <img src = "./Images/css3.png"></img>
                   <div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div>
                 </div>
                 <div id = "js">
                   <img src = "./Images/js.png"></img>
                   <div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div><div class = "un"></div>
                 </div>
                <!-- <div id = "c++">
                   <img src = "/var/www/html/Portfolio/Images/c++.png"></img>
                 </div>-->


           </section>

           <section id = "proj"><!--Projets-->

                <div id = "onglets">
                   <div id = "onglet_contain_1">
                    <div id = "onglet-1">Sites Web</div>
                    <div id = "onglet-2">Logiciels</div>
                   </div>

                 <div id = "onglet_contain_2">

                   <div class="item">
                  <a href="#"><img src="./Images/image.jpeg" alt="Sauron" title="Sauron" /></a>

                  <div class="caption">
                   <a href="">Sauron</a>
                   <p>Seigneur des tenebres</p>
                  </div>
                  </div>
                  <div class="item">
                 <a href="#"><img src="./Images/proj1.png" alt="Sauron" title="Sauron" /></a>

                 <div class="caption">
                  <a href="">Premier site</a>
                  <p>Acheter de la bière easy</p>
                 </div>
                 </div>

                 </div>


                 <div id = "onglet_contain_3">

                   <div class="item">
                  <a href="#"><img src="./Images/proj2.png" alt="Sauron" title="Sauron" /></a>

                  <div class="caption">
                   <a href="">ClassGenerator</a>
                   <p>Générer vos classe C++ facilement !</p>
                  </div>
                  </div>

                 </div>







                  </div>
                </div>

           </section>

         </div>

         <footer>   <!-- Pied de la page -->


	 </footer>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
         <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js"></script>
         <script src = "Script/jquery.color.js"></script>
         <script src = "Script/anim_sect.js"></script>
         <script src = "Script/encre_dynam.js"></script>
         <script src = "Script/onglets.js"></script>
         <script src = "Script/zoom_img.js"></script>



      </body>

   </html>
