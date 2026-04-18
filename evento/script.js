document
  .getElementById('formWhatsapp')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const numero = '553232168545';

    const texto =
      `Nome: ${nome}%0A` +
      `Telefone: ${telefone}%0A` +
      `Mensagem: ${mensagem} `;

    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
  });
