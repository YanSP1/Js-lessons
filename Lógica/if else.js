//if = se
//else if = senão se
//else = senão

//Se (condição) ocorrer
//Execute {Código}
//Senão execute {código}

//Com valor definido

const hora = 23.03;

if (hora < 12) {
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if(hora >= 17 && hora <= 23.59) {
    console.log('Boa noite')
} else {
    console.log("Valor inválido")
}

const numero = 4;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else {
    console.log('O número NÃO está entre 0 e 5.')
}

//Sem valor definido

const grana = true;

if (grana) {
    console.log('Consigo sair')
} else {
    console.log('Não consigo sair')
}
