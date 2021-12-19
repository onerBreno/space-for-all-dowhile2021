function changeHeaderWhenScroll() {
  const header = document.querySelector('header')
  const headerHeight = header.offsetHeight
  if (window.scrollY >= headerHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

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

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  spaceBetween: 32,
  speed: 400,
  effect: 'slide',
  initialSlide: 1,
  loop: true,

  breakpoints: {
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

// VanillaTilt
VanillaTilt.init(document.querySelector('.your-element'), {
  max: 25,
  speed: 400
})

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll('.your-element'))

// Active
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
