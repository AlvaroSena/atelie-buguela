const currentLocation = window.location.href
const prodLocation = 'https://alvarosena.github.io/atelie-buguela'

const redirectField = document.getElementById('redirect-form')
const backPageLink = document.getElementById('a-back-home')
console.log(backPageLink.href)

if (currentLocation === prodLocation) {
  redirectField.value = `${prodLocation}/success/index.html`
  backPageLink.href = `${prodLocation}`
} 

redirectField.value = `${currentLocation}success/index.html`
backPageLink.href = `${currentLocation}`