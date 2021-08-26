/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) =>
  n.addEventListener('click', linkAction)
)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) =>
  n.addEventListener('click', linkAction)
)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
        .classList.add('active-link')
    } else {
      document
        .querySelector(
          '.nav__menu a[href*=' + sectionId + ']'
        )
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 200)
    scrollTop.classList.add('show-scroll')
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme)
    ? 'dark'
    : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'bx-moon'
    : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[
    selectedTheme === 'dark' ? 'add' : 'remove'
  ](darkTheme)
  themeButton.classList[
    selectedIcon === 'bx-moon' ? 'add' : 'remove'
  ](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/

function scaleCV() {
  document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/

function removeScale() {
  document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/
let areaCV = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

const pdfOptions = {
  margin: 0,
  filename: 'DaniilPankovCV.pdf',
  image: { type: 'png', quality: 1 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
}

function generateResume() {
  html2pdf(areaCV, pdfOptions)
}
resumeButton.addEventListener('click', () => {
  scaleCV()
  generateResume()
  setTimeout(removeScale, 5000)
})
