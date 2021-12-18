function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
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
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    document.querySelector('body').classList.remove('scroll-none')
  })
}
