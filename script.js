// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Animação de entrada suave para seções ao rolar a página.
     * Utiliza a API IntersectionObserver para eficiência.
     */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela (intersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    });

    // Observa cada elemento que deve ser animado
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    /**
     * TODO: Lógica para a busca com Autocomplete.
     * * Esta funcionalidade requer um backend. O fluxo seria:
     * 1. O usuário digita algo no campo de busca.
     * 2. O JavaScript envia uma requisição (fetch) para uma API no seu servidor
     * com o termo digitado.
     * 3. O servidor busca no banco de dados produtos que correspondam ao termo.
     * 4. A API retorna uma lista de sugestões (ex: ['ESP32', 'ESP32 com Câmera']).
     * 5. O JavaScript recebe essa lista e a exibe em um dropdown abaixo da barra de busca.
     */
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        if (query.length > 2) {
            console.log(`Buscando por: ${query}`);
            // Aqui entraria a chamada para a API (fetch('/api/search?q=' + query))
        }
    });

});