const estatura = $("estatura");
const peso = $("peso");
const boton = $("btn_calcular")

let imc = () => {
    const resultado = peso.value / (estatura.value **2)
    alert(`El IMC de la persona es: ${resultado}`)
    estatura.value = "";
    peso.value = ""
}

function $(elemento){
    return document.getElementById(elemento)
};

