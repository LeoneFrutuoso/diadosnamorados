document.addEventListener("DOMContentLoaded", function() {
    
    // Efeito de corações ao clicar na página
    document.body.addEventListener("click", function(e) {
        // Cria o elemento do coração
        const coracao = document.createElement("div");
        coracao.innerHTML = "❤️";
        coracao.style.position = "absolute";
        coracao.style.left = e.pageX + "px";
        coracao.style.top = e.pageY + "px";
        coracao.style.fontSize = Math.random() * (30 - 15) + 15 + "px"; // Tamanhos variados
        coracao.style.pointerEvents = "none";
        coracao.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        coracao.style.transform = "translate(-50%, -50%) scale(1)";
        
        document.body.appendChild(coracao);
        
        // Pequeno delay para acionar a animação de subir e sumir
        setTimeout(() => {
            coracao.style.transform = `translate(-50%, -150%) scale(1.4)`;
            coracao.style.opacity = "0";
        }, 50);
        
        // Remove o coração do HTML depois que a animação termina
        setTimeout(() => {
            coracao.remove();
        }, 1050);
    });
    
});