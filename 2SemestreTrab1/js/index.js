var root = document.querySelector(':root');
var max_chars = 35;

function updateText(){
    let input = document.getElementById("input-text").value;
    

    if(input.length > max_chars) {
        input = input.substring(0, max_chars);
    }

    document.getElementById("text-area").innerHTML = input;
}

function updateTextMsg(){
    let input = document.getElementById("input-happy").value;
    
    if(input.length > max_chars) {
        input = input.substr(0, max_chars);
    }
    
    document.getElementById("happy").innerHTML = input;
    
}

function updateBorder() {
    let input = document.getElementById('border-select').value;
    root.style.setProperty('--var-cartao-border', input + ' solid black');
}

function updateSize() {
    let input = document.getElementById('size-select').value;
    input = input.split('x')
    
    root.style.setProperty('--var-cartao-width', input[0]+'px');
    root.style.setProperty('--var-cartao-height', input[1]+'px');

    if (input[0] == '500') {
        document.getElementById('happy').style.fontSize = 'initial';
        document.getElementById('text-area').style.fontSize = 'initial';
        max_chars = 35;
        
    } else if (input[0] == '600')  {
        document.getElementById('happy').style.fontSize = 'large';
        document.getElementById('text-area').style.fontSize = 'large';
        max_chars = 30;

    } else {
        document.getElementById('happy').style.fontSize = 'x-large';
        document.getElementById('text-area').style.fontSize = 'x-large';
        max_chars = 30;

    }

}

function updateColor() {
    let input = document.getElementById('color-button').value;
    root.style.setProperty('--var-cartao-color', input);
}

function updateRadius(){
    let input = document.getElementById('input-range').value;
    root.style.setProperty('--var-cartao-radius', (input*0.5)+'px');
    console.log(input)

}