const inputTypeColor = document.getElementById("inputTypeColor")
const selectModo = document.getElementById("selectModo")
var rgbHex = "rgb"

//Verifica qual método para esolher cor:
function escolherModo(){
    switch(selectModo.value){
        case "rgb":
            usarRGB()
            corTypeRange()

            break
        case "hex":
            usarHex()
            corTypeRange()

            break
        case "typeColor":
            usarInputTypeColor()
            corInputTypeColor()
            break
    }

}

// função caso escolherModo seja rgb
function usarRGB(){
    rgbHex = "rgb"
    inputTypeColor.style.display = "none"

    red.style.display = "block"
    green.style.display = "block"
    blue.style.display = "block"
    for(i = 0; i<document.getElementsByClassName("labelDasCores").length; i++){
        document.getElementsByClassName("labelDasCores")[i].style.display = "block"
    }
}

// função caso escolherModo seja hex
function usarHex(){
    usarRGB()
    rgbHex = "hex"
}
    // formatar o texto em hexadecimal
    function componentToHex(cor) {
        var hex = cor.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }


// função caso escolherModo seja input tipo cor
function usarInputTypeColor(){
    rgbHex = "typeColor"
    red.style.display = "none"
    green.style.display = "none"
    blue.style.display = "none"
    for(i = 0; i<document.getElementsByClassName("labelDasCores").length; i++){
        document.getElementsByClassName("labelDasCores")[i].style.display = "none"
    }
    inputTypeColor.style.display ="block"
}

// Mudar a cor do desenho por input cor
function corInputTypeColor(){
    desenho.style.backgroundColor = inputTypeColor.value
}

// listener do 'inputTypeColor' e 'selectModo'
inputTypeColor.addEventListener("input",corInputTypeColor)