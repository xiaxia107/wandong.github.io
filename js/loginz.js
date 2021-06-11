var eyes = document.getElementById('eyes');
var password = document.getElementsByClassName('password')[0];
var flag = false;
eyes.addEventListener('click', function() {
    if (flag == false) {
        eyes.style.backgroundImage = 'url("../images/zy.png")';
        password.type = "text";
        flag = true;
    } else {
        eyes.style.backgroundImage = 'url("../images/by.png")';
        password.type = "password";
        flag = false;
    }
});