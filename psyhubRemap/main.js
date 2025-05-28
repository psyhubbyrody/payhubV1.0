


//seleciona o botao na nav
const modalNavButton = document.querySelector(".list-items-modal button");
//pega o modal (lista de itens)
const modalTools = document.querySelector(".modal-tools");


//cria um eent listner que detecta se esta clicando no botao e utiliza o tailwind para deixar em show o modal
modalNavButton.addEventListener("click", (e) => {
  e.stopPropagation();
  modalTools.classList.toggle("hidden");
});

//detecta se ha algum click fora do modal e o fecha caso haja
document.addEventListener("click", (e) => {
  if (!modalTools.contains(e.target) && !modalNavButton.contains(e.target)) {
    modalTools.classList.add("hidden");
  }
});


