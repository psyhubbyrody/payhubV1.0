// Esperar que o DOM esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar os elementos de entrada
    const searchbar = document.querySelector('.searchbar');
    const gameSelect = document.getElementById('game-cheats');
    const typeSelect = document.getElementById('cheat-type');
    
    // Selecionar todos os cards de cheats
    const cheatCards = document.querySelectorAll('.cheat-card');
    
    // Função para filtrar os cards com base nos critérios de pesquisa
    function filterCards() {
        // Obter os valores atuais dos filtros
        const searchText = searchbar.value.toLowerCase();
        const selectedGame = gameSelect.value;
        const selectedType = typeSelect.value;
        
        //determinar se deve o card ser exibido ou ocultado
        cheatCards.forEach(card => {
            // Obter os dados do card
            const cardGame = card.getAttribute('data-game');
            const cardType = card.getAttribute('data-type');
            
            //texto do título e descrição para pesquisa
            const cardTitle = card.querySelector('h1').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            
            //verifica se o card atende a todos os critérios
            const matchesSearch = searchText === '' || 
                                 cardTitle.includes(searchText) || 
                                 cardDescription.includes(searchText);
            
            const matchesGame = selectedGame === 'all' || selectedGame === '' || cardGame === selectedGame;
            const matchesType = selectedType === 'all' || selectedType === '' || cardType === selectedType;
            
            //Exibe ou ocultar o card com base nos resultados do filtro
            if (matchesSearch && matchesGame && matchesType) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Adicionar event listeners para os eventos de entrada
    searchbar.addEventListener('input', filterCards);
    gameSelect.addEventListener('change', filterCards);
    typeSelect.addEventListener('change', filterCards);
    
    // Executar a filtragem inicial para garantir que o estado inicial esteja correto
    filterCards();
});
