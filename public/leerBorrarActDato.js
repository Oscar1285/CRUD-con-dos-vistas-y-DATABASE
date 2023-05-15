const borrarDato_a = document.querySelectorAll(".borrarDato");
borrarDato_a.forEach(elemento => {
  elemento.addEventListener("click", () => {
    if (confirm("Quieres borrar este dato?")){
      fetch('/borrarDato', {
        method: 'DELETE',
        body: JSON.stringify({ "id": elemento.id }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(mensaje => {
          alert(mensaje);
          location.reload();
        });
    }
  })
});

const inputs = document.querySelectorAll("input");

inputs[1].addEventListener("click", (e) => {
  if (inputs[0].value.length === 0) {
    alert("Introduce un dato!!");
  } else {
    const id = document.querySelector(".modal").getAttribute("editid");
    fetch('/actualizarDato', {
      method: 'PUT',
      body: JSON.stringify({ 
        "dato": inputs[0].value,
        "id": id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(mensaje => {
        alert(mensaje);
        location.reload();
      });
  }
});