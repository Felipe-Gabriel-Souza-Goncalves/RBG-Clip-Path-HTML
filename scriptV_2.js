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

divVerticeTriangulo.addEventListener("input", () =>{
    mudarTriangulo(trianguloVertice1.value, trianguloVertice2.value, trianguloVertice3.value)
})
// -----------------------------------------------
const divVerticeQuadrado = document.getElementById("movimentoQuadrado")
const verticeQuadradoX1 = document.getElementById("verticeX1")
const verticeQuadradoX2 = document.getElementById("verticeX2")
const verticeQuadradoX3 = document.getElementById("verticeX3")
const verticeQuadradoX4 = document.getElementById("verticeX4")

divVerticeQuadrado.addEventListener("input", () =>{
    mudarQuadrado(verticeQuadradoX1.value, verticeQuadradoX2.value, verticeQuadradoX3.value, verticeQuadradoX4.value)
})
// -------------------------------------------------
const divElipse = document.getElementById("movimentoElipse")
const larguraElipse = document.getElementById("larguraElipse")
const alturaElipse = document.getElementById("alturaElipse")

divElipse.addEventListener("input", ()=>{
    console.log("o kario")
    mudarElipse(larguraElipse.value, alturaElipse.value)
})


function formato(formato){
    switch(formato){
        case "quadrado":
            desenho.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% 0 )"
            divVerticeTriangulo.style.display = "none"
            divVerticeQuadrado.style.display = "block"
            divElipse.style.display = "none"
            break;
        case "triangulo":
            desenho.style.clipPath = "polygon(50% 0, 0 100%, 100% 100%)"
            divVerticeTriangulo.style.display = "block"
            divVerticeQuadrado.style.display = "none"
            divElipse.style.display = "none"
            break;
        case "circulo":
            desenho.style.clipPath = "ellipse(50% 50%)"
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

function mudarQuadrado(x1,x2,x3,x4){
    desenho.style.clipPath = `polygon(${x1}% 0, ${x2}% 0, ${x3}% 100%, ${x4}% 100%)`
}
function mudarTriangulo(x1,x2,x3){
    desenho.style.clipPath = `polygon(${x1}% 0, ${x2}% 100%, ${x3}% 100%`
}
function mudarElipse(largura, altura){
    desenho.style.clipPath = `ellipse(${largura}% ${altura}%)`
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

