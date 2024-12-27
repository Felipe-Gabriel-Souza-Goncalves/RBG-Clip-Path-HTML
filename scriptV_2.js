// variaveis dos inputs de cores
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue")

red.addEventListener("input", corTypeRange)
green.addEventListener("input", corTypeRange)
blue.addEventListener("input", corTypeRange)

// constantes dos elementos dos Span 
const valorRed = document.getElementById("valorRed")
const valorGreen = document.getElementById("valorGreen")
const valorBlue = document.getElementById("valorBlue")
//------------------------------------------------
const desenho = document.getElementById("desenho")
//------------------------------------------------
// Todas as constantes referentes ao triangulo
const divInputTriangulo = document.getElementById("movimentoTriangulo")
const trianguloVerticeX = document.getElementsByClassName("trianguloVerticeX")
const trianguloVerticeY = document.getElementsByClassName("trianguloVerticeY")
const spanRotacaoTriangulo = document.getElementById("spanRotacaoTriangulo")
const inputRotacaoTriangulo = document.getElementById("rotacaoTriangulo")

divInputTriangulo.addEventListener("input", () =>{
    mudarTriangulo(trianguloVerticeX[0].value, trianguloVerticeX[1].value, trianguloVerticeX[2].value,
                   trianguloVerticeY[0].value, trianguloVerticeY[1].value, trianguloVerticeY[2].value,
                   inputRotacaoTriangulo.value)
})
// -----------------------------------------------
// Todas as constantes referentes ao quadrado
const divInputQuadrado = document.getElementById("movimentoQuadrado")
const quadradoVerticeX = document.getElementsByClassName("quadradoVerticeX")
const quadradoVerticeY = document.getElementsByClassName("quadradoVerticeY")
const spanRotacaoQuadrado = document.getElementById("spanRotacaoQuadrado")
const inputRotacaoQuadrado = document.getElementById("rotacaoQuadrado")

divInputQuadrado.addEventListener("input", () =>{
    mudarQuadrado(quadradoVerticeX[0].value, quadradoVerticeX[1].value, quadradoVerticeX[2].value, quadradoVerticeX[3].value,
                  quadradoVerticeY[0].value, quadradoVerticeY[1].value, quadradoVerticeY[2].value, quadradoVerticeY[3].value,
                  inputRotacaoQuadrado.value
    )
})
// -------------------------------------------------
// Todas as constantes referentes ao circulo/elipse
const divInputElipse = document.getElementById("movimentoElipse")
const larguraElipse = document.getElementById("larguraElipse")
const alturaElipse = document.getElementById("alturaElipse")
const inputRotacaoElipse = document.getElementById("rotacaoElipse")
const spanRotacaoElipse = document.getElementById("spanRotacaoElipse")


divInputElipse.addEventListener("input", ()=>{
    mudarElipse(larguraElipse.value, alturaElipse.value, inputRotacaoElipse.value)
})

// escolher o formato desejado
function formato(formato){
    // configurações antes dos formatos
    desenho.style.rotate = "0deg"
    divInputTriangulo.style.display = "none"
    divInputQuadrado.style.display = "none"
    divInputElipse.style.display = "none"

    switch(formato){
        case "quadrado":
            desenho.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% 0 )"
            divInputQuadrado.style.display = "block"
            spanRotacaoQuadrado.innerHTML = "0"
            inputRotacaoQuadrado.value = "0"
            break;
        case "triangulo":
            desenho.style.clipPath = "polygon(50% 0, 0 100%, 100% 100%)"
            divInputTriangulo.style.display = "block"
            spanRotacaoTriangulo.innerHTML = "0"
            inputRotacaoTriangulo.value = "0"
            break;
        case "circulo":
            desenho.style.clipPath = "ellipse(50% 50%)"
            divInputElipse.style.display = "block"
            spanRotacaoElipse.innerHTML = "0"
            inputRotacaoElipse.value = "0"
            break;
    }
}

function corTypeRange(){
    if(rgbHex == "rgb"){
        valorRed.innerHTML = red.value
        valorGreen.innerHTML = green.value
        valorBlue.innerHTML = blue.value
    } else if(rgbHex == "hex"){
        valorRed.innerHTML = componentToHex(parseInt(red.value))
        valorGreen.innerHTML = componentToHex(parseInt(green.value))
        valorBlue.innerHTML = componentToHex(parseInt(blue.value))
    }
    
    desenho.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
}


function mudarQuadrado(x1,x2,x3,x4,y1,y2,y3,y4, rotacao){
    desenho.style.clipPath = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%, ${x4}% ${y4}%)`
    desenho.style.rotate = `${rotacao}deg` 
    spanRotacaoQuadrado.innerHTML = rotacao
}
function mudarTriangulo(x1,x2,x3, y1, y2, y3, rotacao){
    desenho.style.clipPath = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%`
    desenho.style.rotate = `${rotacao}deg` 
    spanRotacaoTriangulo.innerHTML = rotacao
}
function mudarElipse(largura, altura, rotacao){
    desenho.style.clipPath = `ellipse(${largura}% ${altura}%)`
    desenho.style.rotate = `${rotacao}deg` 
    spanRotacaoElipse.innerHTML = rotacao
}

function reiniciarCores(){
    red.value = 0
    green.value = 0
    blue.value = 0
    valorRed.innerHTML = 0
    valorGreen.innerHTML = 0
    valorBlue.innerHTML  = 0
    inputTypeColor.value = 0
    corTypeRange()
}

function copiarCor(){
    var corCopiada;
    if(rgbHex == "rgb"){
        corCopiada = `rgb(${red.value}, ${green.value}, ${blue.value})`
        navigator.clipboard.writeText(corCopiada)
    } else if(rgbHex == "hex"){
        corCopiada = "#" + valorRed.innerHTML + valorGreen.innerHTML + valorBlue.innerHTML
        navigator.clipboard.writeText(corCopiada)
    } else{
        corCopiada = `${window.getComputedStyle(desenho).getPropertyValue("background-color")}`
        navigator.clipboard.writeText(corCopiada)
    }
    alert("Cor copiada para área de tranferência como " + rgbHex)
}

function copiarClipPath(){
    var elemento = `${window.getComputedStyle(desenho).getPropertyValue("clip-path")}`
    navigator.clipboard.writeText(elemento)
    alert("Clip-path copiado para área de transfêrencia")
}

function mudarTamanho(){
    tamanho = document.getElementById("tamanho").value
    desenho.style.width = `${tamanho}%`
    desenho.style.height = `${tamanho}%`
}