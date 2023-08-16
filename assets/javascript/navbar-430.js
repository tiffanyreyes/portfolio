fetch('../../navbar-430.html')
.then(res => res.text())
.then(text => {
    document.getElementById("nav-container").innerHTML = text;
});