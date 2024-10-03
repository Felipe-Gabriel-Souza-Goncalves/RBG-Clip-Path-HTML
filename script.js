// variaveis dos inputs de cores
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue")
const valorRed = document.getElementById("valorRed")
const valorGreen = document.getElementById("valorGreen")
const valorBlue = document.getElementById("valorBlue")

// variaveis sobre o canvas
var tela = document.querySelector("canvas")
var pincel = tela.getContext("2d")
    pincel.fillStyle = `black`
var formato = "quadrado"

pincel.fillRect(200,200,200,200);

function desenhar(){
        valorRed.innerHTML = red.value
        valorGreen.innerHTML = green.value
        valorBlue.innerHTML = blue.value

        pincel.fillStyle = `rgb(${red.value}, ${green.value}, ${blue.value})`
        pincel.clearRect(0,0,800,600)
        pincel.beginPath()
    
        switch(formato){
            case "quadrado": quadrado(); break;
            case "circulo": circulo(); break;
            case "triangulo": triangulo(); break;
        }
}

document.body.addEventListener("input", desenhar)

function quadrado(){
    pincel.fillRect(200,200,200,200);
}

function circulo(){
    pincel.arc(300,300,140, 2*3,14)
    pincel.fill();
}
function triangulo(){
    pincel.moveTo(150,400)
    pincel.lineTo(450,400)
    pincel.lineTo(300,100)
    pincel.lineTo(150,400)
    pincel.fill()
}