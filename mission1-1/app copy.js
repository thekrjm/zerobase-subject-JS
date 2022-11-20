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

// 토글 아이콘이 click 이벤트에 따라 nav active와 localStorage 설정
function handleToggleIconClick() {
    const toggleIcon = document.querySelector('i.toggle')

    toggleIcon.addEventListener('click', (ev) => {
        const navigationElement = document.querySelector('nav')
        const isActive = navigationElement.classList.contains('active')
        toggleNav(!isActive)
    })
}

// 로컬스토리지를 참고해서 nav active여부 결정, preload class 제거
function init() {
    // 만약 localStorage에 isNavOpen값이 참이면 미리 토글을 열어둠
    const isNavOpen = localStorage.getItem('isNavOpen');
    if (isNavOpen === 'true') {
        toggleNav(true)
    }

    // 초기 진입할때 transition이 가능하도록 preload class 제거
    // setTimeout(() => {
    // }, 1000)
    document.body.classList.remove('preload')
    document.body.style.visibility = "visible"
}

// do something!
document.addEventListener('DOMContentLoaded', function (ev) {
    init() // 초기 설정 (preload제거, 토글설정)
    handleToggleIconClick() // 토글 버튼 클릭에 대한 이벤트 제어
})