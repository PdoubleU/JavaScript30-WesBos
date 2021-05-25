// lodash _.debounce:
function debounce(func, wait = 30, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

let images = document.querySelectorAll('img');

function animateImage(elem) {
    images.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        const imgBottom = img.offsetTop + img.height;
        const isHalfHeightImg = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;

        if (isHalfHeightImg && isNotScrolledPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }

    })
}

window.addEventListener('scroll', debounce(animateImage));