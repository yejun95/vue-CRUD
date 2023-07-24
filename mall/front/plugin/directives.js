module.exports = (Vue) => {

    Vue.directive('auto-scroll-bottom', { // 메시지가 들어오면 자동으로 스크롤이 내려감
        update: (el) => {
            el.scrollTop = el.scrollHeight
        }
    })
}