const showMore = () => {
    let buttonMore = document.getElementById('show-more-button');
    let hideProp = document.getElementById('about-hide');

    if (hideProp.style.display === 'block') {
        buttonMore.innerHTML = 'Show More';
        hideProp.style.display = 'none';
    }else {
        buttonMore.innerHTML = 'Show Less';
        hideProp.style.display = 'block';
    }
}

