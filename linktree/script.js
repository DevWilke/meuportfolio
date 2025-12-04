// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    const music = document.getElementById('background-music');

    // Tenta tocar a música
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // A reprodução automática foi bloqueada.
            // Vamos esperar pela primeira interação do usuário.
            console.log("A reprodução automática de áudio foi bloqueada pelo navegador.");
            
            // Adiciona um evento de clique ao corpo do documento que só roda uma vez
            document.body.addEventListener('click', () => {
                music.play();
            }, { once: true }); // A opção 'once: true' remove o evento após ser disparado
        });
    }

    // A função para o botão de ebooks continua a mesma
    window.showEbooks = function(event) {
        event.preventDefault(); 
        alert('Nossos ebooks estarão disponíveis em breve!');
    };
});