let cursor = 0;

// 0 ~ 배열의 크기 - 1 까지 접근할 수 있음.
const images = document.getElementsByClassName("image-slice-item");
console.log(images);

const leftArrow = document.getElementsByClassName("image-slice__arrow-left");
leftArrow[0].addEventListener("click", () => moveImage(-1, -1, images.length -1));


const rightArrow = document.getElementsByClassName("image-slice__arrow-right");
rightArrow[0].addEventListener("click", () => moveImage(1, images.length, 0));


const moveImage = (position, checkValue, initValue) => {
    const navList = document.getElementsByClassName("image-slice-item_nav");
    const prevImage = images[cursor];
    prevImage.classList.remove("cursor");
    navList[cursor].classList.remove("visited");
    cursor += position;
    if (cursor === checkValue) {
        cursor = initValue;
    }
    const nextImage = images[cursor];
    nextImage.classList.add("cursor");
    navList[cursor].classList.add("visited");
};

const imagesNav = document.getElementsByClassName("image-slice-items_nav")[0];
console.log(imagesNav);


const imageNavClickFn = (index) => {
    return () => {
        const navList = document.getElementsByClassName("image-slice-item_nav");
        const prevImage = images[cursor];
        prevImage.classList.remove("cursor");
        navList[cursor].classList.remove("visited");
        cursor = index;
        const nextImage = images[cursor];
        nextImage.classList.add("cursor");
        navList[cursor].classList.add("visited");
    }
};

let i = 0;
const range = images.length;
while (i < range) {
    const span = document.createElement("SPAN");
    span.classList.add("image-slice-item_nav");
    if (i === cursor) {
        span.classList.add("visited");
    }

    span.addEventListener("click", imageNavClickFn(i));

    imagesNav.appendChild(span);
    ++i;
}

setInterval(() => {
    moveImage(1, images.length, 0);
}, 1500);