const input = document.getElementById('button');

function addingEventListener() {
  input.addEventListener('click', () => {
    alert('Button clicked!');
  });
}
// Add the event listener when the script loads
addingEventListener();

