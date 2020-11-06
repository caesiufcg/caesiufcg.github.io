//econde as pessoas 1,2 e 3
function esconde1(){
    document.getElementById("pessoa-1").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("pessoa1-links").style.display = "none";
    document.getElementById("pessoa-2").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("pessoa2-links").style.display = "none";
    document.getElementById("pessoa-3").style.display = "none";
    document.getElementById("texto3").style.display = "none";
    document.getElementById("pessoa3-links").style.display = "none";
}

//econde as pessoas 4,5 e 6
function esconde2(){
    document.getElementById("pessoa-4").style.display = "none";
    document.getElementById("texto4").style.display = "none";
    document.getElementById("pessoa4-links").style.display = "none";
    document.getElementById("pessoa-5").style.display = "none";
    document.getElementById("texto5").style.display = "none";
    document.getElementById("pessoa5-links").style.display = "none";
    document.getElementById("pessoa-6").style.display = "none";
    document.getElementById("texto6").style.display = "none";
    document.getElementById("pessoa6-links").style.display = "none";
}

//econde as pessoas 7,8 e 9
function esconde3(){
    document.getElementById("pessoa-7").style.display = "none";
    document.getElementById("texto7").style.display = "none";
    document.getElementById("pessoa7-links").style.display = "none";
    document.getElementById("pessoa-8").style.display = "none";
    document.getElementById("texto8").style.display = "none";
    document.getElementById("pessoa8-links").style.display = "none";
    document.getElementById("pessoa-9").style.display = "none";
    document.getElementById("texto9").style.display = "none";
    document.getElementById("pessoa9-links").style.display = "none";
}

//econde as pessoas 10,11 e 12
function esconde4(){
    document.getElementById("pessoa-10").style.display = "none";
    document.getElementById("texto10").style.display = "none";
    document.getElementById("pessoa10-links").style.display = "none";
    document.getElementById("pessoa-11").style.display = "none";
    document.getElementById("texto11").style.display = "none";
    document.getElementById("pessoa11-links").style.display = "none";
    document.getElementById("pessoa-12").style.display = "none";
    document.getElementById("texto12").style.display = "none";
    document.getElementById("pessoa12-links").style.display = "none";
}

//torna visivel as pessoas da pagina 1 e esconde as outras
function page1() {
    document.getElementById("pessoa-1").style.display = "initial";
    document.getElementById("texto1").style.display = "initial";
    document.getElementById("pessoa1-links").style.display = "initial";
    document.getElementById("pessoa-2").style.display = "initial";
    document.getElementById("texto2").style.display = "initial";
    document.getElementById("pessoa2-links").style.display = "initial";
    document.getElementById("pessoa-3").style.display = "initial";
    document.getElementById("texto3").style.display = "initial";
    document.getElementById("pessoa3-links").style.display = "initial";
    esconde2()
    esconde3()
    esconde4()
}

//torna visivel as pessoas da pagina 2 e esconde as outras
function page2() {
    document.getElementById("pessoa-4").style.display = "initial";
    document.getElementById("texto4").style.display = "initial";
    document.getElementById("pessoa4-links").style.display = "initial";
    document.getElementById("pessoa-5").style.display = "initial";
    document.getElementById("texto5").style.display = "initial";
    document.getElementById("pessoa5-links").style.display = "initial";
    document.getElementById("pessoa-6").style.display = "initial";
    document.getElementById("texto6").style.display = "initial";
    document.getElementById("pessoa6-links").style.display = "initial";
    esconde1()
    esconde3()
    esconde4()
}

//torna visivel as pessoas da pagina 3 e esconde as outras
function page3() {
    document.getElementById("pessoa-7").style.display = "initial";
    document.getElementById("texto7").style.display = "initial";
    document.getElementById("pessoa7-links").style.display = "initial";
    document.getElementById("pessoa-8").style.display = "initial";
    document.getElementById("texto8").style.display = "initial";
    document.getElementById("pessoa8-links").style.display = "initial";
    document.getElementById("pessoa-9").style.display = "initial";
    document.getElementById("texto9").style.display = "initial";
    document.getElementById("pessoa9-links").style.display = "initial";
    esconde1()
    esconde2()
    esconde4()
}

//torna visivel as pessoas da pagina 4 e esconde as outras
function page4() {
    document.getElementById("pessoa-10").style.display = "initial";
    document.getElementById("texto10").style.display = "initial";
    document.getElementById("pessoa10-links").style.display = "initial";
    document.getElementById("pessoa-11").style.display = "initial";
    document.getElementById("texto11").style.display = "initial";
    document.getElementById("pessoa11-links").style.display = "initial";
    document.getElementById("pessoa-12").style.display = "initial";
    document.getElementById("texto12").style.display = "initial";
    document.getElementById("pessoa12-links").style.display = "initial";
    esconde1()
    esconde2()
    esconde3()
}