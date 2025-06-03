//seleciona o botao na nav
const navbarModalBTN = document.querySelector("#modal-show-btn-nav button");
//pega o modal (lista de itens)
const navbarModalItems = document.querySelector("#modal-items");


//cria um eent listner que detecta se esta clicando no botao e utiliza o tailwind para deixar em show o modal
navbarModalBTN.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarModalItems.classList.toggle("hidden");
});

//detecta se ha algum click fora do modal e o fecha caso haja
document.addEventListener("click", (e) => {
  if (!navbarModalItems.contains(e.target) && !navbarModalBTN.contains(e.target)) {
    navbarModalItems.classList.add("hidden");
  }
});



