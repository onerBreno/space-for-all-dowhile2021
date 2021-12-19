function changeHeaderWhenScroll() {
  const header = document.querySelector('header')
  const headerHeight = header.offsetHeight
  if (window.scrollY >= headerHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const header = document.querySelector('header')
const toggle = document.querySelectorAll('header .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    header.classList.toggle('show')
    document.querySelector('body').classList.toggle('scroll-none')

    header.classList.toggle('scroll')

    const headerHeight = header.offsetHeight
    if (window.scrollY < headerHeight) {
      header.classList.remove('scroll')
    }
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    header.classList.remove('show')
    document.querySelector('body').classList.remove('scroll-none')
  })
}

function changeLinkHeaderWhenScroll() {
  const sections = document.querySelectorAll('section')
  const navLib = document.querySelectorAll('nav ul li')

  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id')
      }
    })

    navLib.forEach(li => {
      li.classList.remove('active')
      if (li.classList.contains(current)) {
        li.classList.add('active')
      }
    })
  })
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  changeLinkHeaderWhenScroll()
})

// swiper
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  keyboard: true,
  spaceBetween: 32,
  speed: 400,
  effect: 'slide',
  initialSlide: 1,

  breakpoints: {
    1280: {
      slidesPerView: 3
    },

    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollreveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home #planets3d, #home #rocket3d, #home .text,

  #launchBase .text, #launchBase #requirements .align, #launchBase #requirements img,

  #astronaut-selection #astronaut, #astronaut-selection .text, #astronaut-selection .simple-cards,

  #courses header #stars, #courses header #telescope, #courses header .text, #courses .cards, 

  #contribute img, #contribute .text,
  footer .container
`,
  { interval: 100 }
)
