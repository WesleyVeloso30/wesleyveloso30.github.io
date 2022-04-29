
class MobileNavbar {
  constructor (mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'
    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks () {
    this.navLinks.forEach(link => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
    })
  }

  handleClick () {
    this.navList.classList.toggle(this.activeClass)
  }

  addClickEvent () {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init () {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobileMenu',
  'header nav ul',
  'header nav ul li'
)

mobileNavbar.init()