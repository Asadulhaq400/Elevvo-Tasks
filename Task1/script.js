const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('closed');
});
