document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário.

    // Limpar o formulário
    document.getElementById('contatoForm').reset();
});

document.getElementById('whatsappBtn').addEventListener('click', function() {
    window.open('https://wa.me/119******', '_blank'); 
});

//document.getElementById('instagramBtn').addEventListener('click', function() {
    //window.open('https://www.instagram.com/*****', '_blank'); 
//});
