const navEle = document.querySelectorAll('.content_nav_item')
const section = ['img_section','director_mess_section','business_philosophy_section','business_sector_section','social_philanthropy_section']

const handleNavClick = (id) => {
    const ele = document.querySelector(`#${id}`)
    const position = ele.getBoundingClientRect()
    window.scrollTo({
        top: position.top + window.scrollY - 108,
        behavior: 'smooth'
    })
}

navEle.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('content_nav_item-active')){
            document.querySelector('.content_nav_item-active').classList.remove('content_nav_item-active')
            item.classList.add('content_nav_item-active')
        }
        handleNavClick(section[index])
    })
})