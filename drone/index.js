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