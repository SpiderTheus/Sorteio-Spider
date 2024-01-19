    const btnSorte = document.querySelector(".s-hero-mid .btn-sortear")
    
    const paiMid = document.querySelector(".s-hero-mid .campos")
    const sectionPai = document.querySelector(".s-hero-mid .ganhador")

    const btnVoltar = document.createElement("button")

    btnVoltar.classList = "btn-sortear volt"
    btnVoltar.innerText = "VOLTAR"

    function getNumber(numMax, ganhadores){
        if(ganhadores <= 1){
            let numberSort = parseInt(Math.random() * numMax + 1);
            return numberSort;

        } else {
            let arrGanhadores = [];
            let number; 

            for(let i = 0; i < ganhadores; i++){
                do {
                    number = parseInt(Math.random() * numMax) + 1;
                } while (arrGanhadores.includes(number));
                
                arrGanhadores.push(number);
            }
            return arrGanhadores;
        }    
    }
    
    function contagemRegresiva(n){
        paiMid.innerHTML = ""

        const h2Regre = document.createElement("h2")
        h2Regre.classList = "cont"
        h2Regre.innerText = "Contagem regresiva"

        sectionPai.appendChild(h2Regre)

        const h2Number = document.createElement("h2")
        sectionPai.appendChild(h2Number)

        let cont = 5
        h2Number.innerText = cont

        const contagem = setInterval(function(){
            cont--
            h2Number.innerText = cont

            if(cont === 0){
                
                clearInterval(contagem)
                h2Regre.innerText = ''
                h2Number.innerText = ''
                getDomGanhador(n)
                return
            }

        }, 1000)
    }

    function getDomGanhador(resul){
        const h2Winner = document.createElement("h2")
        h2Winner.classList = "cont"
        h2Winner.innerText = "O numero sorteado foi:"
        sectionPai.appendChild(h2Winner)

        if(typeof resul === typeof []){
            let i = 1
            h2Winner.innerText = "Os numeros sorteados foram:"
            resul.forEach(element => {
                const numWinerArr = document.createElement("h2")
                numWinerArr.innerHTML = `<i>${i}°</i> ${element}`
                sectionPai.appendChild(numWinerArr)

                i++
            }) 

        } else {
            const numWiner = document.createElement("h2")
            numWiner.textContent = resul
            sectionPai.appendChild(numWiner)
        }
       sectionPai.appendChild(btnVoltar)
    }

    function sortear(){
        let maiorNumero = document.querySelector(".number-max #numMax").value
        let qtdGanhadores = document.querySelector(".quantos-ganhadores #qtdGan").value

        maiorNumero = Number(maiorNumero)
        qtdGanhadores = Number(qtdGanhadores)

        if((maiorNumero && qtdGanhadores) === 0){
            alert("preencha todos os campos")
            return
        } else if(maiorNumero < qtdGanhadores){
            alert("digite o maior numero possivel superior ao numero de ganahdores")
            return
        }
        const resultado = getNumber(maiorNumero, qtdGanhadores)
        contagemRegresiva(resultado)
        }

        btnSorte.addEventListener("click", sortear)
        btnVoltar.addEventListener("click", () => location.reload(true))
