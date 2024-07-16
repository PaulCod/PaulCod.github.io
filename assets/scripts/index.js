
const form = document.querySelector(".form-contato")
const footer = document.querySelector(".footer")

// Função para enviar o formulário
form.addEventListener("submit", (event) => {
  event.preventDefault()
  alert("Contato enviado com sucesso!")
  form.reset()
})

// inserindo o ano no rodape
const year = new Date().getFullYear()
const footerText = `Criado por Paulo ©️${year}`

footer.textContent = footerText