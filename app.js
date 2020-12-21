let div1 = document.getElementById("affichage1");
let div2 = document.getElementById("affichage2");

function affichage1(...variables){
    for(let i of variables){
        div1.innerHTML += i + "<br>";
    }
}

function affichage2(...variables){
    for(let i of variables){
        if(!isNaN(i)){
            let div = document.createElement("div");
            div.innerHTML = i;
            document.body.appendChild(div);
        }
    }
}

affichage1("a","b","c")
affichage2("a",1,"b",4)