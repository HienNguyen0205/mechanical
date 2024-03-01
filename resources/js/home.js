const news_container = document.querySelector('#news_container')
const news_group = document.querySelectorAll('#news_container .news_group')
const news_group_width = news_group[0].offsetWidth

let news_index = 0

setInterval(() => {
    news_container.scrollTo({
        left: news_group_width * news_index,
        behavior: 'smooth'
    })
    news_index = news_index + 1 === news_group.length ? 0 : news_index + 1
}, 6000)