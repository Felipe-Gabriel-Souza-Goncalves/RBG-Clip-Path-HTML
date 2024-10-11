// variaveis dos inputs de cores
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue")


red.addEventListener("input", mudarCor)
green.addEventListener("input", mudarCor)
blue.addEventListener("input", mudarCor)

const valorRed = document.getElementById("valorRed")
const valorGreen = document.getElementById("valorGreen")
const valorBlue = document.getElementById("valorBlue")
//------------------------------------------------
const desenho = document.getElementById("desenho")
//------------------------------------------------
const divVerticeTriangulo = document.getElementById("movimentoTriangulo")
const trianguloVertice2 = document.getElementById("trianguloVertice2")
const trianguloVertice3 = document.getElementById("trianguloVertice3")
const trianguloVertice1 = document.getElementById("trianguloVertice1")

const trianguloVerticeY2 = document.getElementById("trianguloVerticeY2")
const trianguloVerticeY3 = document.getElementById("trianguloVerticeY3")
const trianguloVerticeY1 = document.getElementById("trianguloVerticeY1")

divVerticeTriangulo.addEventListener("input", () =>{
    mudarTriangulo(trianguloVertice1.value, trianguloVertice2.value, trianguloVertice3.value,
                   trianguloVerticeY1.value, trianguloVerticeY2.value, trianguloVerticeY3.value)
})
// -----------------------------------------------
const divVerticeQuadrado = document.getElementById("movimentoQuadrado")
const verticeQuadradoX1 = document.getElementById("verticeX1")
const verticeQuadradoX2 = document.getElementById("verticeX2")
const verticeQuadradoX3 = document.getElementById("verticeX3")
const verticeQuadradoX4 = document.getElementById("verticeX4")

const verticeQuadradoY1 = document.getElementById("verticeY1")
const verticeQuadradoY2 = document.getElementById("verticeY2")
const verticeQuadradoY3 = document.getElementById("verticeY3")
const verticeQuadradoY4 = document.getElementById("verticeY4")

divVerticeQuadrado.addEventListener("input", () =>{
    mudarQuadrado(verticeQuadradoX1.value, verticeQuadradoX2.value, verticeQuadradoX3.value, verticeQuadradoX4.value,
                  verticeQuadradoY1.value, verticeQuadradoY2.value, verticeQuadradoY3.value, verticeQuadradoY4.value
    )
})
// -------------------------------------------------
const divElipse = document.getElementById("movimentoElipse")
const larguraElipse = document.getElementById("larguraElipse")
const alturaElipse = document.getElementById("alturaElipse")
const rotacaoElipse = document.getElementById("rotacaoElipse")

divElipse.addEventListener("input", ()=>{
    mudarElipse(larguraElipse.value, alturaElipse.value, rotacaoElipse.value)
})


function formato(formato){
    switch(formato){
        case "quadrado":
            desenho.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% 0 )"
            desenho.style.rotate = "0deg"
            divVerticeTriangulo.style.display = "none"
            divVerticeQuadrado.style.display = "block"
            divElipse.style.display = "none"
            
            break;
        case "triangulo":
            desenho.style.clipPath = "polygon(50% 0, 0 100%, 100% 100%)"
            desenho.style.rotate = "0deg"
            divVerticeTriangulo.style.display = "block"
            divVerticeQuadrado.style.display = "none"
            divElipse.style.display = "none"
            break;
        case "circulo":
            desenho.style.clipPath = "ellipse(50% 50%)"
            desenho.style.rotate = "0deg"
            divVerticeTriangulo.style.display = "none"
            divVerticeQuadrado.style.display = "none"
            divElipse.style.display = "block"
            break;

    }
    return formato
}

function mudarCor(){
    valorRed.innerHTML = red.value
    valorGreen.innerHTML = green.value
    valorBlue.innerHTML = blue.value

    desenho.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
}

function mudarQuadrado(x1,x2,x3,x4,y1,y2,y3,y4){
    console.log(`polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%, ${x4}% ${y4}%)`)
    desenho.style.clipPath = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%, ${x4}% ${y4}%)`
}
function mudarTriangulo(x1,x2,x3, y1, y2, y3){
    desenho.style.clipPath = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%`
}
function mudarElipse(largura, altura, rotacao){
    desenho.style.clipPath = `ellipse(${largura}% ${altura}%)`
    desenho.style.rotate = `${rotacao}deg` 
}

function reiniciarCores(){
    red.value = 0
    green.value = 0
    blue.value = 0
    mudarCor()
}

function copiarCor(){
    var corCopiada = `rgb(${red.value}, ${green.value}, ${blue.value})`
    navigator.clipboard.writeText(corCopiada)
    alert("Cor copiada para área de tranferência")
}

