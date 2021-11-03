const nav = document.querySelector('#header nav')
const tgg = document.querySelectorAll('nav .toggle')

for (const element of tgg) {
  element.addEventListener('click', e => {
    nav.classList.toggle('show') //toggle = alternar
  })
}

//CÓDIGO ALTERNATIVO...

/* const menu = document.querySelector('.icon-menu')
menu.addEventListener('click', e => {
  document.querySelector('#header nav').classList.add('show')
})

const close = document.querySelector('.icon-close')
close.addEventListener('click', e => {
  document.querySelector('#header nav').classList.remove('show')
}) */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', e => {
    nav.classList.remove('show')
  })
}

/* -------------------WHEN SCROLL------------------ */

window.addEventListener('scroll', e => {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const backToTopBotton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopBotton.classList.add('show')
  } else {
    backToTopBotton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  /* checkpoint -> divide a janela toda por 8 e pega metade dela. Ou seja, pega 4 partes dessas 8 em foi dividida: ((window.innerHeight / 8) * 4). Em seguida, soma com o tamanho do deslocamento da janela em relação ao eixo Y. */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop =
      section.offsetTop /* pega o deslocamento do topo da seção */
    const sectionHeight =
      section.offsetHeight /* pega o deslocamento da altura da seção */
    const sectionId = section.getAttribute('id') /* pega o id da seção */

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      /* entre checkpointStart e checkpointEnd */
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* ---------------------SWIPER------------------- */

const swiper = new Swiper('.swiper', {
  slidesPreView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* --------------SCROLL REVEAL------------------- */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, //mili segundos
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact header, #contact .informations, footer .brand, footer .social`,
  {
    interval: 100
  }
)
