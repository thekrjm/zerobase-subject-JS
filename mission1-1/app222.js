// active가 ture이면 nav에 active 클래스 추가, 아니면 제거
function toggleNav(isActive) {
    const navigationElement = document.querySelector('nav')
    localStorage.setItem('isNavOpen', isActive);
    if (isActive) {
        navigationElement.classList.add('active')
    } else {
        navigationElement.classList.remove('active')
    }
}

// do something!
document.addEventListener('DOMContentLoaded', function (ev) {
    // 만약 localStorage에 isNavOpen값이 참이면 미리 토글을 열어둠
    const isNavOpen = localStorage.getItem('isNavOpen');
    if (isNavOpen) {
        toggleNav(true)
    }

    // 초기 진입할때 transition이 가능하도록 preload class 제거
    document.body.classList.remove('preload')

    // toggle 아이콘 클릭에 대한 핸들링
    const toggleIcon = document.querySelector('i.toggle')
    toggleIcon.addEventListener('click', (ev) => {
        const navigationElement = document.querySelector('nav')
        const isActive = navigationElement.classList.contains('active')
        toggleNav(isActive)
    })
})