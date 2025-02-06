// Barra de pesquisa
document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const rows = document.querySelectorAll('#dataTable tbody tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    let match = false;
    cells.forEach(cell => {
      if (cell.textContent.toLowerCase().includes(searchTerm)) {
        match = true;
      }
    });
    row.style.display = match ? '' : 'none';
  });
});

// Editar especificações
document.querySelectorAll('.editBtn').forEach(button => {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    const cells = row.querySelectorAll('td[contenteditable="true"]');
    cells.forEach(cell => {
      cell.contentEditable = true;
      cell.focus();
    });
  });
});

// Excluir registros
document.querySelectorAll('.deleteBtn').forEach(button => {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
  });
});