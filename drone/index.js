// navbar seach_bar

const  navSearch = document.getElementById('nav-search');

const searchIcon = document.getElementById('search-icon');


searchIcon.addEventListener ('click', (e) =>{
    e.stopPropagation();
    navSearch.classList.toggle('active');
});

document.addEventListener('click', (e) =>{
    if (!navSearch.contains(e.target)) {
        navSearch.classList.remove('active');
    }
})

TweenLite.to(".content", 5, {delay:1.5, scrambleText:{text:"OUR CAMERAS", rightToLeft:true, chars:"uppercase"}})