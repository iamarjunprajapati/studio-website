const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    let elements = document.querySelectorAll(".element");
    let fixedImage = document.querySelector('#fixed-image');
    let page4 = document.querySelector('#page4');

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let imgUrl = element.getAttribute("data-image");
            // console.log(imgUrl);
            fixedImage.style.display = "block";
            fixedImage.style.backgroundImage = `url(${imgUrl})`; // Correctly formatted
        });

        element.addEventListener('mouseleave', (event) => {
            // Check if mouse is moving to #fixed-image
            if (!fixedImage.contains(event.relatedTarget)) {
                fixedImage.style.display = "none";
            }
        });
    });

    // Ensure the fixed image disappears when leaving #page4 entirely
    page4.addEventListener('mouseleave', (event) => {
        // Check if mouse is moving to #fixed-image
        if (!fixedImage.contains(event.relatedTarget)) {
            fixedImage.style.display = "none";
        }
    });

    // Optional: If you want the fixed image to stay visible even when hovering over it
    fixedImage.addEventListener('mouseenter', () => {
        fixedImage.style.display = "block"; // Keep it visible
    });

    fixedImage.addEventListener('mouseleave', () => {
        fixedImage.style.display = "none"; // Hide it when leaving fixed-image
    });
}

page4Animation();

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            500: {
                slidesPerView: 5, // 2 slides for screens 640px or wider
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
}

swiper();

function loading(){
    let loading = document.querySelector('#loader');
    setTimeout(()=>{
        loading.style.top = "-100%";
    },5400)
}
loading();