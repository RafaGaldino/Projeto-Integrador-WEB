window.onload = function(){fish();hide_benefits()}
window.onscroll = function(){desktop_mobile();hide_chase_icon()}

//This next code is used for change the desktop menu and mobile menu
function desktop_mobile(){
    var viewport_width = window.pageYOffset;
    var link_collection = document.getElementsByClassName("link");
    var i;
    if(viewport_width > 176){
        document.getElementById("desktop").style.position = "fixed";
        document.getElementById("desktop").style.top = "0px";
        document.getElementById("desktop").style.backgroundColor = "rgba(255, 255, 255)";
        document.getElementById("desktop").style.boxShadow = "0px 1px 1px rgba(0, 0, 0, 0.09)";
        for(i=0; i<link_collection.length;i++){
            link_collection[i].classList.add("link2");
        }
    }
    else{
        document.getElementById("desktop").style.position = "relative";
        document.getElementById("desktop").style.backgroundColor = "transparent";
        document.getElementById("desktop").style.boxShadow = "";
        for(i=0; i<link_collection.length;i++){
            link_collection[i].classList.remove("link2");
        }
    }
}


// This code is used to open mobile menu and close it
function open_mobileMenu(){
document.getElementById("overlay").style.height = "100%";
}
function close_mobileMenu(){
document.getElementById("overlay").style.height = "0px";
}


var x = 0;
function hide_chase_icon(){
    var y = window.pageYOffset;
    if(y > 177){
        document.getElementById("Chase_icon").style.display = "block";
        if(x > y){document.getElementById("Chase_icon").style.top = "0px";}
        else{document.getElementById("Chase_icon").style.top = "-100px";}
    }
    else{document.getElementById("Chase_icon").style.top = "-100px";}
    x = y;
}

// Start the bubbles of the fish
var b = 0;
    function fish(){
        var i;
        var bubbles = document.getElementsByClassName("bubbles");
        for(i = 0; i < bubbles.length; i++ ){
            bubbles[i].style.display = "none";
        }
        if (b > bubbles.length){ b = 0}
        switch(b){
            case 0:
                break;
            case 1:
                bubbles[0].style.display = "block";
                break;
            case 2:
                bubbles[0].style.display = "block";
                bubbles[1].style.display = "block";
                break;
            case 3:
                bubbles[0].style.display = "block";
                bubbles[1].style.display = "block";
                bubbles[2].style.display = "block";
        }
        b++;
        setTimeout(fish, 450);
    }

// This code change da images at the products menu
function MenuImg(x){
  y = document.getElementById("animal_imgs");
  switch(x){
    case 1:
      y.src ="../images/menu_dog.png";
      break;
    case 2:
      y.src = "../images/menu_cat.jpg";
      break;
    case 3:
      y.src = "../images/menu_fish.png";
      break;
    case 4:
      y.src = "../images/menu_bird.png";
      break;
    case 5:
      y.src = "../images/menu_reptile.png"
  }
}

// This code to use to hide the benefits when the view port is tiny
window.onresize = function(){hide_benefits()}
  var vwp;
  var benefits = document.getElementsByClassName("benefits");
  var benefits_index = 0;
  var key = 1;
  var Help_TimeEnd;

  function hide_benefits(){
    vwp = window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth;
    var i;
    if(vwp <= 420){
      if( key == 1){
        key = 0;
        toggle_benefits();
      }
    }
    else{
      for(i=0;i<benefits.length;i++){
        benefits[i].style.display = "block";
      }
      clearTimeout(Help_TimeEnd);
      key = 1;
    }
  }

  function toggle_benefits(){
    var i;
    for(i=0;i<benefits.length;i++){
      benefits[i].style.display = "none";
    }
    if(benefits_index > benefits.length-1){benefits_index = 0}
    benefits[benefits_index].style.display = "block";
    benefits_index++;
    Help_TimeEnd = setTimeout(toggle_benefits, 3000);
}
//Mascara de formulário é um pre-formatação visual para entrada de dados
function mascara (o,f) {
    obj = o;
    func = f;
    setTimeout("atualiza()",0.1);
}
function atualiza () {
    obj.value = func(obj.value);
}
function telefone (v){
    v = v.replace(/\D/g,"");
    v = v.replace(/(\d{2})/,"($1) ");
    if (v.length<14){
        v = v.replace(/(\d{4})/,"$1-");
    }
    else {
        v= v.replace(/(\d{5})/,"$1-");
    }
    return v
}
