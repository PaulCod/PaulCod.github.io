
const form = document.querySelector(".form-contato")
const footer = document.querySelector(".footer")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  alert("Contato enviado com sucesso!")
  form.reset()
})

const year = new Date().getFullYear()
const footerText = `Criado por Paulo ©️${year}`

footer.textContent = footerText