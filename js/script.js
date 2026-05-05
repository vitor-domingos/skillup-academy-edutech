// script.js

// Exemplo: Smooth scroll para links internos (âncoras)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula a posição do elemento alvo
            const offsetTop = targetElement.offsetTop;

            // Faz a rolagem suave
            window.scrollTo({
                top: offsetTop - 60, // Ajuste opcional para compensar um header fixo
                behavior: 'smooth' // A mágica da rolagem suave
            });
        }
    });
});

// Outras interações simples podem ser adicionadas aqui
console.log("Landing Page Script")