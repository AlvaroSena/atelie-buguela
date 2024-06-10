const currentLocation = window.location.href
const prodLocation = 'https://alvarosena.github.io/atelie-buguela'

const redirectField = document.getElementById('redirect-form')

if (currentLocation === prodLocation) {
  redirectField.value = `${prodLocation}/success/index.html`
} 

redirectField.value = `${currentLocation}success/index.html`
