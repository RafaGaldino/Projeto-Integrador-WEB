window.onscroll = function(){desktop_mobile();hide_chase_icon()}

//This next code is used for change the desktop menu and mobile menu
function desktop_mobile(){
    var viewport_width = window.pageYOffset;
    var link_collection = document.getElementsByClassName("link");
    var i;
    if(viewport_width > 176){
        document.getElementById("desktop").style.position = "fixed";
        document.getElementById("desktop").style.top = "0px";
        document.getElementById("desktop").style.backgroundColor = "rgba(255, 255, 255, 0.90)";
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