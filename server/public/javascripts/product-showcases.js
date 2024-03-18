const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const close_slider_icon = document.querySelector('.slider_close_icon')
const slider_container = document.querySelector('.swiper')

const handleCloseSlideIconClick = () => {
    slider_container.style.display = 'none'
}

close_slider_icon.addEventListener('click', handleCloseSlideIconClick)

const searchBar = document.querySelector('.input_container')
const searchBarInput = document.querySelector('.input_container input')
const productItem = document.querySelectorAll('.product_item_container')

const handleSearchClick = () => {
    searchBarInput.focus()
    searchBar.style.outline = '2px solid #0d6efd'
}

const handleSearchFocus = () => {
    searchBar.style.outline = '1px solid #ccc'
}

const handleInOutAnimate = (action, ele) => {
    if(action === 'in'){
        ele.classList.remove('scale-out-center')
        ele.classList.add('scale-in-center')
    }
    else if(action === 'out'){
        ele.classList.remove('scale-in-center')
        ele.classList.add('scale-out-center')
    }
}

const handleSearch = () => {
    const keywords = searchBarInput.value.toLowerCase()
    if(keywords === ''){
        productItem.forEach(item => {
            handleInOutAnimate('in', item)
        })
    }else{
        productItem.forEach(item => {
            const data = item.getAttribute('data-keywords').toLowerCase()
            if(data.includes(keywords)){
                handleInOutAnimate('in', item)
            }else{
                handleInOutAnimate('out', item)
            }
        })
    }
}

searchBar.addEventListener('click', handleSearchClick)
searchBarInput.addEventListener('focusout', handleSearchFocus)
searchBarInput.addEventListener('keyup', handleSearch)

const swiperWrapper = document.querySelector('.swiper-wrapper')

const galleryList = {
    BanLe: [
        'Ban_Le/Bản-Lề.webp',
        'Ban_Le/Bản-Lề-1.webp'
    ],
    BatVNganhGo: [
        'Bat_V_Nganh_Go/Bát-V-Ngành-Gỗ.webp'
    ],
}

const handleProductItemClick = e => {
    const sliderName = e.currentTarget.getAttribute('data-label')
    swiperWrapper.innerHTML = ''
    swiper.appendSlide(
        galleryList[sliderName].map(item => (
            `
            <div class="swiper-slide">
                <img src="/images/product/${item}" alt="product">
            </div>
            `
        ))
    )
    slider_container.style.display = 'block'
}

productItem.forEach(item => {
    item.addEventListener('click', handleProductItemClick)
})