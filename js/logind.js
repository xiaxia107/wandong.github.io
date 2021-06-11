var ul1 = document.getElementById("ul1");
var lis = ul1.getElementsByTagName("li");
var content = document.getElementsByClassName("content")[0];
var divs = content.getElementsByTagName("div");
var currentIndex = 0;
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        console.log(divs[this.value])
        divs[currentIndex].style.display = "none";
        currentIndex = this.value;
        divs[this.value].style.display = "block";
    }
}
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