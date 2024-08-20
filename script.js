// script.js

function encriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText);
    
    // Ocultar la imagen y mostrar el textarea con el texto encriptado
    const imageContainer = document.getElementById('image-container');
    const outputTextArea = document.getElementById('output-text');

    imageContainer.style.display = 'none'; // Ocultar la imagen
    outputTextArea.style.display = 'block'; // Mostrar el textarea
    outputTextArea.value = encryptedText;
    
    document.getElementById('copiar-button').style.display = 'block'; // Mostrar botón de copiar
}

function desencriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    
    // Ocultar la imagen y mostrar el textarea con el texto desencriptado
    const imageContainer = document.getElementById('image-container');
    const outputTextArea = document.getElementById('output-text');

    imageContainer.style.display = 'none'; // Ocultar la imagen
    outputTextArea.style.display = 'block'; // Mostrar el textarea
    outputTextArea.value = decryptedText;
    
    document.getElementById('copiar-button').style.display = 'block'; // Mostrar botón de copiar
}

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarTexto() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
}


