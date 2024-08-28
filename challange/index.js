// const { CustomEase } = require("gsap/all")

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
        "hop",
        "M0,0 C0.053,0.604 0.157,0.72 0.293,0.837 0.435,0.959 0.633,1 1,1"
    );

    const itemsCount = 30;
    const  container = document.querySelector(".container");
    const gallery = document.querySelector(".gallery");

    let isCircularLayout = false;

    const createItems = () => {
        for (let i = 1; i <= itemsCount; i++) {
            const item = document.createElement("div");
            item.classList.add("item");

            const img = document.createElement("img");
            img.src = `./pictures/img${i}.jpg`;
            img.alt = `Image ${i}`;

            item.appendChild(img);
            gallery.appendChild(item);
    }
};


});