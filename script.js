const openM = document.querySelector('#openMenu')
const closeM = document.querySelector('#closeMenu')
openM.addEventListener('click', openMenu)
closeM.addEventListener('click', closeMenu)

function openMenu () {
    menuItem.style.right = '0px'
    openM.style.display = 'none'
    closeM.style.display = 'block'
}

function closeMenu() {
    menuItem.style.right = '-500px'
    closeM.style.display = 'none'
    openM.style.display = 'block'
}