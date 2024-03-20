var menubtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu"); 

sideNav.style.right = "-250px";

menubtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "Images/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "Images/Menu.png";
    }
}


/*IMAGE SLIDER*/
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImg.clientWidth + 300; //getting first image and 300 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {  
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

/*IMAGE SLIDER*/







/* ADD FOOTER*/
document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.querySelector(".footer-placeholder");
    fetch(footerPlaceholder.getAttribute("data-include"))
        .then(response => response.text())
        .then(content => {
            footerPlaceholder.insertAdjacentHTML("afterbegin", content);
        });
});
/* ADD FOOTER */