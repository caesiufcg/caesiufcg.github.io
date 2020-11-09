if (localStorage.tema === 'darkmode'){
    Darkmode()
}

if (localStorage.tema === 'lightmode'){
    Lightmode()
}

function Darkmode() {
    document.documentElement.style.setProperty('--bg', '#000000');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.getElementsByTagName("img")[0].style.display = "none";
    document.getElementsByTagName("img")[1].style.display = "initial";
    document.getElementById("sun").style.filter = "invert(0%)";
    document.getElementById("moon").style.filter = "invert(100%)";   
    localStorage.setItem('tema', 'darkmode');
}

function Lightmode() {
    document.documentElement.style.setProperty('--bg', '#ffffff');
    document.documentElement.style.setProperty('--color', '#000000');
    document.getElementsByTagName("img")[0].style.display = "initial";
    document.getElementsByTagName("img")[1].style.display = "none";
    document.getElementById("sun").style.filter = "invert(100%)";
    document.getElementById("moon").style.filter = "invert(0%)";
    localStorage.setItem('tema', 'lightmode');
}