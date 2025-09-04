function escuro() {
    document.getElementById("container").style.backgroundColor = "black";
    document.getElementById("escuro").style.backgroundColor = "darkgray";
    document.getElementById("titulo").style.color = "darkgray";
    document.getElementById("claro").style.backgroundColor = "white";

    document.getElementById("escuro").style.width = "225px";
    document.getElementById("escuro").style.height = "85px";

    document.getElementById("claro").style.width = "200px";
    document.getElementById("claro").style.height = "75px";
}

function claro() {
    document.getElementById("container").style.backgroundColor = "white";
    document.getElementById("claro").style.backgroundColor = "darkgray";
    document.getElementById("titulo").style.color = "black";
    document.getElementById("escuro").style.backgroundColor = "black";

    document.getElementById("claro").style.width = "225px";
    document.getElementById("claro").style.height = "85px";

    document.getElementById("escuro").style.width = "200px";
    document.getElementById("escuro").style.height = "75px";
}