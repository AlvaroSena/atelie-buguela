const currentLocation = window.location.href
const prodLocation = 'https://alvarosena.github.io/atelie-buguela'

const redirectField = document.getElementById('redirect-form')

if (currentLocation.includes(prodLocation)) {
  redirectField.value = `${prodLocation}/success/index.html`
  backPageLink.href = `${prodLocation}`
} else {
  redirectField.value = `${currentLocation}success/index.html`
}
