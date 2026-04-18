document
  .getElementById('formWhatsapp')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const telefone = document.getElementById('telefone').value.trim()
    const data = document.getElementById('data').value
    const pessoas = document.getElementById('pessoas').value
    const mensagem = document.getElementById('mensagem').value.trim()

    // Formata a data para pt-BR (ex: 15/08/2026)
    const dataFormatada = data
      ? new Date(data + 'T00:00:00').toLocaleDateString('pt-BR')
      : 'Não informada'

    const numero = '553232168545'

    const texto =
      `Olá! Gostaria de fazer uma reserva.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Telefone:* ${telefone}%0A` +
      `*Data desejada:* ${dataFormatada}%0A` +
      `*Número de pessoas:* ${pessoas}%0A` +
      (mensagem ? `*Observações:* ${mensagem}` : '')

    const url = `https://wa.me/${numero}?text=${texto}`

    window.open(url, '_blank')
  })
