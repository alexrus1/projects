const input = document.getElementById('yourName');
const phoneInput = document.getElementById('Phone');
const form = document.querySelector('.showroom-cont__inf-form');
const nameCont = document.querySelector('.showroom-cont__name-input-cont')
const header = document.querySelector('.header-cont__middle-cont')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value.includes('#') || input.value.includes('!') || input.value.includes('@') || input.value.includes('%') || input.value.includes('^') ||
  input.value.includes('&') || input.value.includes('*') ||
  input.value.includes('(') || input.value.includes(')') ||
  input.value.includes('?') || input.value.includes('-') ||
  input.value.includes('+') || input.value.includes('=') ||
  input.value.includes('"') || input.value.includes('№') || input.value.includes('$') ||
  input.value.includes('1') || input.value.includes('2') ||
  input.value.includes('3') || input.value.includes('4') ||
  input.value.includes('5') || input.value.includes('6') ||
  input.value.includes('7') || input.value.includes('8') ||
  input.value.includes('9') || input.value.includes('0') ||
  Boolean(Number(input.value))) {
    const par = document.createElement('p');
    par.classList.add('wrong-input');
    par.setAttribute('id', `wrong`)
    input.classList.add('wrong-for-input')
    par.textContent = 'Недопустимый формат'
    nameCont.append(par)
  }
  else {
    input.classList.remove('wrong-for-input')
    const par = document.querySelector('.wrong-input')
    par.classList.add('display')
    console.log(par)
  }

})
