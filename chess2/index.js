// function insertImage() {
//     document.querySelectorAll('.box').forEach (image => {
//         if(image.innerText.length !==0){
//             if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
//                 image.innerHTML = `${image.innerText} <img class = 'all-img all-pown' src="${image.innerHTML}.png" alt =""`> 
//                 image.style.cursor = 'pointer'
//             }
//         }
//     })
// }

// insertImage()

function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()