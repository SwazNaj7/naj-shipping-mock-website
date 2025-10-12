document.getElementById('btn-send').addEventListener('click', () => {
    document.getElementById('messageAlert').classList.remove('d-none'); // show alert

    // Clear form after sending data
    document.getElementById('name').value = '';
    document.getElementById('exampleInputEmail').value = '';
    document.getElementById('message').value = '';
    document.getElementById('exampleCheck1').checked = false;
  })