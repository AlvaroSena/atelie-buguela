const sidebar = document.getElementById('sidebar')

function closeSidebar() {
  sidebar.classList.add('hidden')
}

function openSidebar() {
  sidebar.classList.remove('hidden')
}

addEventListener('scroll', () => {
  closeSidebar()
})