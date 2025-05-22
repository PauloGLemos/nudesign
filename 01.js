// Seleciona o checkbox
const darkModeToggle = document.getElementById('darkModeToggle');

// Função para ativar/desativar dark mode e salvar preferência
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Verifica preferência salva e aplica no carregamento
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
  }
}

// Adiciona o evento para toggle
darkModeToggle.addEventListener('change', toggleDarkMode);
