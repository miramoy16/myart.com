const carousel= document.querySelector(".carousel");
const drag= (e) => {
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", drag);

const carousel1= document.querySelector(".carousel-1");
const drag1= (e) => {
    carousel1.scrollLeft = e.pageX;
}

carousel1.addEventListener("mousemove", drag1);