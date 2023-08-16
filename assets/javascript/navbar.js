fetch('../../navbar.html')
.then(res => res.text())
.then(text => {
    document.getElementById("nav-container").innerHTML = text;
});