
function LanceDeDes() {
    var joueur=["A lance les dés.","B lance les dés."];
    var j=joueur.indexOf(document.getElementById("tour").innerHTML);
    // alert((j+1) % (joueur.length));
    document.getElementById("tour").innerHTML=joueur[(j+1) % (joueur.length)];


    //Chiffres
    var Z1=Math.floor(Math.random() * 6)+1;
    var Z2=Math.floor(Math.random() * 6)+1;
    var Z3=Math.floor(Math.random() * 6)+1;
    if(Z1==6){
        Z1="?";
    }
    if(Z2==6){
        Z2="?";
    }
    if(Z3==6){
        Z3="?";
    }
    document.getElementById("Z1").innerHTML=Z1;
    document.getElementById("Z2").innerHTML=Z2;
    document.getElementById("Z3").innerHTML=Z3;

    var F1=Math.floor(Math.random() * 6)+1;
    var F2=Math.floor(Math.random() * 6)+1;
    var F3=Math.floor(Math.random() * 6)+1;

    //Couleurs
    if(F1==1){
        document.getElementById("F1").style.background="orange";
    }
    if(F1==2){
        document.getElementById("F1").style.background="green";
    }
    if(F1==3){
        document.getElementById("F1").style.background="red";
    }
    if(F1==4){
        document.getElementById("F1").style.background="blue";
    }
    if(F1==5){
        document.getElementById("F1").style.background="yellow";
    }
    if(F1==6){
        document.getElementById("F1").style.background="black";
    }

    if(F2==1){
        document.getElementById("F2").style.background="orange";
    }
    if(F2==2){
        document.getElementById("F2").style.background="green";
    }
    if(F2==3){
        document.getElementById("F2").style.background="red";
    }
    if(F2==4){
        document.getElementById("F2").style.background="blue";
    }
    if(F2==5){
        document.getElementById("F2").style.background="yellow";
    }
    if(F2==6){
        document.getElementById("F2").style.background="black";
    }


    if(F3==1){
        document.getElementById("F3").style.background="orange";
    }
    if(F3==2){
        document.getElementById("F3").style.background="green";
    }
    if(F3==3){
        document.getElementById("F3").style.background="red";
    }
    if(F3==4){
        document.getElementById("F3").style.background="blue";
    }
    if(F3==5){
        document.getElementById("F3").style.background="yellow";
    }
    if(F3==6){
        document.getElementById("F3").style.background="black";
    }

    document.getElementById("F1").style.display = "block";
    document.getElementById("F2").style.display = "block";
    document.getElementById("F3").style.display = "block";
    document.getElementById("Z1").style.color = "black";
    document.getElementById("Z2").style.color = "black";
    document.getElementById("Z3").style.color = "black";

    

}
