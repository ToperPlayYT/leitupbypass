if (document.getElementsByClassName("form-control")[0].placeholder != "Введите ваш URL") {
alert("LeitUP Bypassed");
window.location.href = document.getElementsByClassName("form-control")[0].placeholder;
}