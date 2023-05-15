const inputs = document.querySelectorAll("input");

inputs[1].addEventListener('click', () => {
  if (inputs[0].value.length === 0) {
    alert("Introduce un dato!!");
  } else {
    fetch('/insertarDato', {
      method: 'POST',
      body: JSON.stringify({ "dato": inputs[0].value }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(mensaje => {
      alert(mensaje);
      location.href = "/datos";
    });
  }
}); 