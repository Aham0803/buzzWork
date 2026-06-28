document.querySelector('.create-btn').addEventListener('click', function() {
  document.getElementById('taskModal').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('taskModal').style.display = 'none';
});

document.getElementById('saveBtn').addEventListener('click', function() {
  const name = document.getElementById('taskName').value;
  if (name === '') {
    alert('Task name bharo!');
    return;
  }
  alert('Task saved: ' + name);
  document.getElementById('taskModal').style.display = 'none';
});