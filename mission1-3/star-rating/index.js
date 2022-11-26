export default function ($container) {
  const maxRating = +$container.dataset.maxRating
  
  // 감싸고 있는 star-rating-container
  const starRatingContainer = document.createElement('div')
  starRatingContainer.classList.add('star-rating-container')

  // star 아이콘 생성 (maxRating 개수)
  for (let i = 0; i < maxRating; i++) {
    const icon = document.createElement('i')
    icon.classList.add('bx');
    icon.classList.add('bxs-star')
    icon.dataset.index = i

    // 마우스 오버 이벤트
    icon.addEventListener('mouseover', (ev) => {
      const index = ev.target.dataset.index
      starRatingContainer.querySelectorAll('i').forEach(star => {
        const currentIndex = star.dataset.index;
        if (currentIndex <= index) {
          star.classList.add('hovered')
        }
      })
    })

    // 마우스 떠나는 이벤트
    icon.addEventListener('mouseleave', (ev) => {
      const index = ev.target.dataset.index
      starRatingContainer.querySelectorAll('i').forEach(star => {
        const currentIndex = star.dataset.index;
        if (currentIndex <= index) {
          star.classList.remove('hovered')
        }
      })
    })

    // 클릭 이벤트
    icon.addEventListener('click', (ev) => {
      // 현재 순서
      const index = ev.target.dataset.index

      // 클릭 이벤트에 대한 반응
      starRatingContainer.querySelectorAll('i').forEach(star => {
        const currentIndex = star.dataset.index;
        if (currentIndex <= index) {
          star.classList.add('selected')
        }
        
        // rating-change 이벤트 발생
        const ratingChangeEvent = new CustomEvent('rating-change', {
          detail: +currentIndex + 1
        })

        $container.dispatchEvent(ratingChangeEvent)
      })
    })

    starRatingContainer.appendChild(icon)
  }

  $container.appendChild(starRatingContainer)
}


function addThemeCss() {
  // theme.css 삽입
  const link = document.createElement('link')
  link.href = '/star-rating/theme.css'
  link.rel = 'stylesheet'

  // 스타일 중 마지막으로 삽입
  const links = document.querySelectorAll('link')
  document.head.insertBefore(link, links[links.length - 1].nextSibling)
}

addThemeCss()