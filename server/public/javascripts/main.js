const nav_btn = document.querySelector('.nav_icon_wrap')
const hidden_nav_container = document.querySelector('.hidden_nav')
const open_nav_btn = document.querySelector('.nav_icon_wrap .fa-bars')
const close_nav_btn = document.querySelector('.nav_icon_wrap .fa-xmark')

const setNavSpace = () => {
    hidden_nav_container.style.height = (screen.availHeight - 80) + 'px'
    hidden_nav_container.style.width = screen.availWidth + 'px'
    hidden_nav_container.style.left = -0.75 + 'rem'
}

setNavSpace()

nav_btn.addEventListener('click', () => {
    if(open_nav_btn.style.display === 'block'){
        hidden_nav_container.style.display = 'block'
        open_nav_btn.style.display = 'none'
        close_nav_btn.style.display = 'block'
    }else{
        hidden_nav_container.style.display = 'none'
        open_nav_btn.style.display = 'block'
        close_nav_btn.style.display = 'none'
    }
})

window.addEventListener('resize', setNavSpace, { passive: true })

const contact_us_btn = document.querySelector('#contact_us_btn')

contact_us_btn?.addEventListener('click', () => {
    window.location.pathname = '/recruitment-contact'
})

const nav_list = []