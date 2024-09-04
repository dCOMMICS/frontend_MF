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
            img.src = `./assets/img${i}.jpg`;
            // ERROR CAN'T RECALL IMAGE FROM DIRECTORY and location don't match from a previous on....
            img.alt = `Image ${i}`;

            item.appendChild(img);
            gallery.appendChild(item);
    }
};

createItems();

});


// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(CustomEase);

//     CustomEase.create(
//         "hop",
//         "M0,0 C0.053,0.604 0.157,0.72 0.293,0.837 0.435,0.959 0.633,1 1,1"
//     );

//     const itemsCount = 30;
//     const container = document.querySelector(".container");
//     const gallery = document.querySelector(".gallery");

//     let isCircularLayout = false;

//     const createItems = () => {
//         for (let i = 1; i <= itemsCount; i++) {
//             const item = document.createElement("div");
//             item.classList.add("item");

//             const img = document.createElement("img");
//             img.src = `./assets/img${i}.jpg`;  // Corrected 'assets' spelling
//             img.alt = `Image ${i}`;

//             item.appendChild(img);
//             gallery.appendChild(item);
//         }  // Closing brace for the for loop
//     };

//     createItems();  // Call the createItems function

//     // Additional logic can go here, such as layout handling or animations
// });



// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(CustomEase);

//     CustomEase.create(
//         "hop",
//         "M0,0 C0.053,0.604 0.157,0.72 0.293,0.837 0.435,0.959 0.633,1 1,1"
//     );

//     const itemsCount = 30;
//     const container = document.querySelector(".container");
//     const gallery = document.querySelector(".gallery");

//     let isCircularLayout = false;

//     const createItems = () => {
//         for (let i = 1; i <= itemsCount; i++) {
//             const item = document.createElement("div");
//             item.classList.add("item");

//             const img = document.createElement("img");
//             img.src = `./assets/img${i}.jpg`;
//             img.alt = `Image ${i}`;

//             item.appendChild(img);
//             gallery.appendChild(item);
//         }  // Closing brace for the for loop
//     };

//     createItems();  // Call the createItems function

// });  // Closing brace for the DOMContentLoaded event listener



// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(CustomEase);

//     CustomEase.create(
//         "hop",
//         "M0,0 C0.053,0.604 0.157,0.72 0.293,0.837 0.435,0.959 0.633,1 1,1"
//     );

//     const itemsCount = 30;
//     const container = document.querySelector(".container");
//     const gallery = document.querySelector(".gallery");

//     const createItems = () => {
//         for (let i = 1; i <= itemsCount; i++) {
//             const item = document.createElement("div");
//             item.classList.add("item");

//             const img = document.createElement("img");
//             img.src = `./assets/img${i}.jpg`;
//             img.alt = `Image ${i}`;

//             item.appendChild(img);
//             gallery.appendChild(item);
//         } // Closing brace added here
//     };

//     createItems(); // Moved inside the DOMContentLoaded event
// });
