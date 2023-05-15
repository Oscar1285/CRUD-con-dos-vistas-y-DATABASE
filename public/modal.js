// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the EDIT button, open the modal
btns.forEach(element => {
  element.addEventListener("click", (e) => {
    const id = e.target.getAttribute("editID");
    const dato = e.target.getAttribute("dato");
    modal.setAttribute("editID", id);
    document.getElementById("editInput").value = dato;
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 