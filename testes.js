function getSorteio(numMax, ganhadores){

    if(ganhadores <= 1){
        const numberSort = parseInt(Math.random() * numMax) + 1
        return console.log(numberSort)

    } 
    else {
        let arrGanhadores = []
        let number 

        for(let i = 0; i < ganhadores; i++){
            do {
                number = parseInt(Math.random() * numMax) + 1
            } while (arrGanhadores.includes(number));
            
            arrGanhadores.push(number)
        }


        return console.log(arrGanhadores)
    } 
}



getSorteio(20, 4)