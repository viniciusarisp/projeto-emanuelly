const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
 
  const header = document.getElementById('header') 
  header.classList.toggle('active')

  const headactive = header.classList.contains('active')   

  const nav = document.getElementById('nav') 
  nav.classList.toggle('active')

  const navactive = nav.classList.contains('active')   

  event.currentTarget.setAttribute('aria-expanded' , navactive)

  if (navactive) { event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }


}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)