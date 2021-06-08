const dropBckg = document.querySelector('.dropdownBackground');
const navElems = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top')

function openDropdown() {
    triggerClass(this, dropBckg);

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoors = dropdown.getBoundingClientRect();
    const navCoors = nav.getBoundingClientRect();

    const coors = {
        width: dropdownCoors.width,
        height: dropdownCoors.height,
        top: dropdownCoors.top - navCoors.top,
        left: dropdownCoors.left - navCoors.left,
    }

    dropBckg.style.setProperty('width', coors.width + 'px');
    dropBckg.style.setProperty('height', coors.height + 'px');
    dropBckg.style.setProperty('top', coors.top + 'px');
    dropBckg.style.setProperty('left', coors.left + 'px');
}

function triggerClass(elem, background) {
    elem.classList.toggle('trigger-enter');
    setTimeout(() => elem.classList.toggle('trigger-enter-active'), 50);
    background.classList.toggle('open');
}


function closeDropdown() {
    triggerClass(this, dropBckg);
}

navElems.forEach(e => e.addEventListener('mouseenter', openDropdown));
navElems.forEach(e => e.addEventListener('mouseleave', closeDropdown));