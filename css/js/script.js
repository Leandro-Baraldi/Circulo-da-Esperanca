const form = document.getElementById('formulario');
const msgErro = document.getElementById('mensagemErro');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    if (!nome || !email || !telefone || !endereco) {
      msgErro.textContent = 'Por favor, preencha todos os campos obrigatórios!';
      msgErro.style.color = 'red';
    } else {
      msgErro.textContent = 'Cadastro enviado com sucesso! Obrigado por se voluntariar 💚';
      msgErro.style.color = 'green';
      form.reset();
    }
  });
}
