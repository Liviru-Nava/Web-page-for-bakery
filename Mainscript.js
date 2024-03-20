/*document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_item");
    const buttonsHTML = Array.from(items, () => {
        return  `<span class = "carousel_button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `<div class = "carousel_nav">
    ${buttonsHTML.join("")}
    </div>`);

    const buttons = carousel.querySelectorAll(".carousel_button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //un-select all the items
            items.forEach(item => item.classList.remove("carousel_item_selected"));
            buttons.forEach(button => button.classList.remove("carousel_button_selected"));

            items[i].classList.add("carousel_item_selected");
            button.classList.add("carousel_button_selected");
        });
    });
});*/
/*const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.transform = `translateX(-${idx * 100}%)`;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Set an interval for automatic slide transition
const interval = setInterval(nextSlide, 5000); // Change the duration as needed (in milliseconds)

// Stop the automatic transition when hovering over the slider
const sliderWrapper = document.querySelector('.slider-wrapper');
sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// Resume automatic transition when not hovering
sliderWrapper.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 5000);
});

// Initial slide display
showSlide(currentSlide);
*/
