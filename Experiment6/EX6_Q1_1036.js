function change(){
    var div = document.getElementById("box");

    var bgcolor = document.getElementById("bgcolor").value;
    div.style.backgroundColor = bgcolor;

    var tcolor = document.getElementById("tcolor").value;
    div.style.color = tcolor;

    var tsize = document.getElementById("tsize").value;
    div.style.textSize = tsize + "%";

    var width = document.getElementById("width").value;
    div.style.width = width + "px";

    var height = document.getElementById("height").value;
    div.style.height = height + "px";
    
    var bdradius = document.getElementById("bdradius").value;
    div.style.borderRadius = bdradius + "%";
}